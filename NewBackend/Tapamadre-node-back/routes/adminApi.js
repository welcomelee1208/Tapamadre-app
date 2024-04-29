var express = require("express");
var router = express.Router();
var db = require("../models/index");
var bcrypt = require("bcryptjs");

//반환할 api객체
var apiResult = {
  code: "",
  data: {},
  result: "",
};

//----------------------개발진행메모-------------
//로그인/회원가입 조회/비밀번호 수정 postman 확인 완/ 회원정보조회 테스트 필요/
//로그인 요청 처리
router.post("/login", async (req, res, next) => {
  try {
    var id = req.body.id;
    var password = req.body.password;

    const member = await db.Admin.findOne({
      where: { id: id },
    });

    // 유저가 존재하지 않을 경우
    if (!member) {
      return res.json({ code: "400", data: {}, result: "Not exist id" });
    }

    // 암호 체크
    const compareResult = await bcrypt.compare(password, member.password);

    // 암호가 일치하지 않을 경우
    if (!compareResult) {
      return res.json({
        code: "400",
        data: {},
        result: "WrongPassword",
      });
    }

    // 로그인 성공 시 응답
    return res.json({
      code: "200",
      data: member,
      result: "Ok",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in userApi /login POST",
    });
  }
});
//회원가입
router.post("/entry", async (req, res, next) => {
  try {
    const { id, password, name } = req.body;

    // 아이디 중복 검사
    const existMember = await db.Admin.findOne({ where: { id } });
    if (existMember) {
      return res.status(409).json({
        code: 409,
        data: null,
        msg: "아이디가  이미 사용 중입니다.",
      });
    }

    // 비밀번호 암호화
    const encryptedPassword = await bcrypt.hash(password, 12);
    const admin = {
      id,
      password: encryptedPassword,
      name,
      user_state_code: 1,
      reg_date: Date.now(),
    };

    // 사용자 생성
    const newAdmin = await db.Admin.create(admin);

    // 성공 응답 전송
    res.status(200).json({
      code: 200,
      data: newAdmin,
      msg: "회원 등록 성공",
    });
  } catch (err) {
    console.error("회원가입 처리 중 오류 발생:", err);
    res.status(500).json({
      code: 500,
      data: null,
      msg: "회원가입 실패",
    });
  }
});

//회원 목록 조회
router.get("/all", async (req, res, next) => {
  try {
    var userList = await db.Admin.findAll();

    return res.json({ code: "200", data: userList, result: "Ok" });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in userApi /all GET",
    });
  }
});

// 회원정보 조회
router.get("/profile", async (req, res, next) => {
  try {
    const userId = req.Admin.admin_id; // 로그인된 사용자의 식별 정보를 가져옴
    // 사용자를 식별 정보로 찾음
    const admin = await db.Admin.findByPk(userId);

    if (!admin) {
      return res.status(404).json({
        code: 404,
        data: null,
        msg: "사용자를 찾을 수 없습니다.",
      });
    }

    // 사용자의 개인정보 전송 (패스워드 제외)
    const userProfile = {
      id: admin.id,
      name: admin.name,
    };

    return res.status(200).json({
      code: 200,
      data: userProfile,
      msg: "개인정보 조회 성공",
    });
  } catch (err) {
    console.error("개인정보 조회 중 오류 발생:", err);
    return res.status(500).json({
      code: 500,
      data: null,
      msg: "개인정보 조회 중 오류 발생",
    });
  }
});
//비밀번호 수정(프로필 에서 수정할 시..)
router.post("/modify/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { password } = req.body;

    // 비밀번호 해싱
    const encryptedPassword = await bcrypt.hash(password, 12);

    // 사용자 정보 업데이트
    const result = await db.Admin.update(
      {
        password: encryptedPassword, // 새로운 비밀번호를 해싱하여 저장
        edit_date: Date.now(),
      },

      {
        where: { admin_id: userId },
      }
    );

    if (result[0] === 0) {
      // 변경된 행이 없음
      return res.status(404).json({
        code: "404",
        data: null,
        result: "해당 사용자를 찾을 수 없습니다.",
      });
    }

    return res.json({
      code: "200",
      data: result,
      result: "사용자 정보가 성공적으로 수정되었습니다.",
    });
  } catch (err) {
    console.error("회원 정보 수정 중 오류 발생:", err);
    return res.status(500).json({
      code: "500",
      data: null,
      result: "회원 정보 수정 실패",
    });
  }
});

//비밀번호 찾기

module.exports = router;
