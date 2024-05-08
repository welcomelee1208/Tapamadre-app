var express = require("express");
var router = express.Router();
var db = require("../models/index");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//반환할 api객체
var apiResult = {
  code: "",
  data: {},
  result: "",
};

//----------------------개발진행메모-------------
// 전부작동 확인 완료..비밀번호 찾기 어캐해야될지 고민?

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

    // last_login_date 업데이트
    member.last_login_date = new Date();
    await member.save();

    const payload = {
      admin_id: member.admin_id,
      id: member.id,
      name: member.name,
      reg_date: member.reg_date, // 이름 추가
    };

    // JWT 토큰 발급
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // 로그인 성공 시 응답에 토큰을 포함하여 반환
    return res.json({
      code: "200",
      data: { token: token },
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

//개인 정보 조회
router.get("/profile", async (req, res, next) => {
  try {
    // 헤더에서 토큰 추출
    const token = req.headers.authorization.split(" ")[1];

    // 토큰을 복호화하여 사용자 아이디 추출
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const adminId = decodedToken.admin_id;

    // 사용자를 식별 정보로 찾음
    const admin = await db.Admin.findByPk(adminId);

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
      admin_id: admin.admin_id,
      reg_date: admin.reg_date,
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

//비밀번호 찾기
router.post("/forgot-password", async (req, res, next) => {
  try {
    const { id, name } = req.body;

    // 해당 아이디와 이름을 가진 사용자 찾기
    const user = await db.Admin.findOne({
      where: { id: id, name: name },
    });

    if (!user) {
      return res.status(404).json({
        code: 404,
        data: null,
        msg: "해당 사용자를 찾을 수 없습니다.",
      });
    }

    // 임시 비밀번호 생성
    const temporaryPassword = Math.random().toString(36).slice(-8); // 임시 비밀번호 생성

    // 비밀번호 암호화
    const encryptedPassword = await bcrypt.hash(temporaryPassword, 12);

    // 사용자 정보 업데이트
    await db.Admin.update(
      {
        password: encryptedPassword,
      },
      {
        where: { id: id },
      }
    );

    return res.status(200).json({
      code: 200,
      data: temporaryPassword,
      msg: "새로운 임시 비밀번호를 사용자 이메일로 전송했습니다.",
    });
  } catch (err) {
    console.error("비밀번호 찾기 중 오류 발생:", err);
    return res.status(500).json({
      code: 500,
      data: null,
      msg: "비밀번호 찾기 중 오류 발생",
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

module.exports = router;
