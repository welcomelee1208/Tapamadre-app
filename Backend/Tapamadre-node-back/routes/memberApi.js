var express = require("express");
var router = express.Router();
var db = require("../models/index");
var bcrypt = require("bcryptjs");
var AES = require("mysql-aes");
var jwt = require("jsonwebtoken");

//반환할 api객체
var apiResult = {
  code: "",
  data: {},
  result: "",
};

//----------------------개발진행메모-------------
// login POST 탈퇴상태회원/휴면상태 회원의 경우 아직 테스트 진행하지 않음 /해당경우 작동 불확실
// 양방향 암호화 미구현상태

//로그인 요청 처리
router.post("/login", async (req, res, next) => {
  try {
    var email = req.body.email;
    var password = req.body.password;

    const member = await db.User.findOne({
      where: { email: email },
    });

    //유저가 존재하지 않을 경우
    if (!member) res.json({ code: "400", data: {}, result: "Not exist Email" });
    else {
      //유저가 탈퇴 상태의 회원일 경우
      if (member.user_state_code == 9)
        res.json({
          code: "400",
          data: null,
          result: "Can not Access for drop out user",
        });

      //암호 체크
      var compareResult = await bcrypt.compare(password, member.password);

      //암호가 일치하지 않을 경우
      if (!compareResult) {
        res.json({ code: "400", data: {}, result: "Password not Correct" });
      } else {
        apiResult.result = "Ok";
        //휴면 회원일 경우 회원 정보를 일반 회원으로 업데이트후 로그인 처리
        if (member.user_state_code == 2) {
          var updateUserStateCode = 0;
          apiResult.result = "Dormant account";
          //email 인증 여부를 확인해서 인증 계정 혹은 미인증 계정으로 code update
          if (member.email_auth_code == 0) updateUserStateCode = 3;
          if (member.email_auth_code == 1) updateUserStateCode = 1;

          var updateUser = { ...member, user_state_code: updateUserStateCode };
          await db.User.update(updateUser, {
            where: { user_id: member.user_id },
          });
        }

        //토큰 생성
        var tokenJsonData = {
          user_id: member.user_id,
          email: member.email,
          user_name: member.user_name,
          telephone: member.telephone,
          auth_type_code: member.auth_type_code,
        };

        const token = jwt.sign(tokenJsonData, process.env.JWT_SECRET, {
          expiresIn: "6h",
          issuer: "tapamadre",
        });

        apiResult.code = "200";
        apiResult.data = { token: token, loginUser: tokenJsonData };
        res.json(apiResult);
      }
    }
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in userApi /login POST",
    });
  }
});
<<<<<<< HEAD

=======
//회원가입
>>>>>>> 0ee20c18c5a13c28fa927534480d29739b78e062
router.post("/entry", async (req, res, next) => {
  try {
    const { email, password, user_name } = req.body;

    // 이메일 중복 검사
    const existMember = await db.User.findOne({ where: { email } });
    if (existMember) {
      return res.status(409).json({
        code: 409,
        data: null,
        msg: "이메일이 이미 사용 중입니다.",
      });
    }

    // 비밀번호 암호화
    const encryptedPassword = await bcrypt.hash(password, 12);
    const user = {
      email,
      password: encryptedPassword,
      user_name,
      reg_type_code: 1,
      user_state_code: 3,
      reg_date: Date.now(),
      email_auth_code: 0,
      email_auth_date: Date.now(),
      auth_type_code: 0,
    };

    // 사용자 생성
    const newUser = await db.User.create(user);

    // 성공 응답 전송
    res.status(200).json({
      code: 200,
      data: newUser,
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
    var userList = await db.User.findAll();

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
    const userId = req.user.user_id; // 로그인된 사용자의 식별 정보를 가져옴

    // 사용자를 식별 정보로 찾음
    const user = await db.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        code: 404,
        data: null,
        msg: "사용자를 찾을 수 없습니다.",
      });
    }

    // 사용자의 개인정보 전송 (패스워드 제외)
    const userProfile = {
      email: user.email,
      user_name: user.user_name,
      telephone: user.telephone,
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
    const result = await db.User.update(
      {
        password: encryptedPassword, // 새로운 비밀번호를 해싱하여 저장
      },
      {
        where: { user_id: userId },
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
      data: null,
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

// 회원정보 삭제
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;

    // 사용자를 ID로 찾음
    const user = await db.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        code: 404,
        data: null,
        msg: "해당 ID를 가진 사용자를 찾을 수 없습니다.",
      });
    }

    // 사용자 정보 삭제
    await db.User.destroy({
      where: { user_id: userId },
    });

    return res.status(200).json({
      code: 200,
      data: null,
      msg: "회원정보 삭제 성공",
    });
  } catch (err) {
    console.error("회원정보 삭제 중 오류 발생:", err);
    return res.status(500).json({
      code: 500,
      data: null,
      msg: "회원정보 삭제 중 오류 발생",
    });
  }
});
//이메일 인증

//비밀번호 찾기

module.exports = router;
