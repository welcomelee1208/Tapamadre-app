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
//회원가입
router.post("/entry", async (req, res, next) => {
  try {
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    //회원가입 로직추가: 메일주소 중복체크
    var existMember = await db.Member.findOne({ where: { email } });
    if (existMember != null) {
      apiResult.code = 500;
      apiResult.data = null;
      apiResult.msg = "ExistDoubleEmail";
    } else {
      //단방향 암호화 해시 알고리즘 적용 사용자 암호 암호화 적용
      var encryptedPassword = await bcrypt.hash(password, 12);
      var user = {
        user_id,
        email,
        member_password: encryptedPassword,
        name,
        entry_type_code: 1,
        use_state_code: 1,
        reg_date: Date.now(),
        reg_member_id: 0,
      };
      var newUser = await db.User.create(user);
      // Generate JWT Token
      const token = jwt.sign(
        { user_id: newUser.user_id, email: newUser.email, name: newUser.name },
        JWT_SECRET,
        { expiresIn: "1h" } // Token expires in 1 hour
      );

      // Send the JWT Token in response
      res.status(201).json({
        code: 201,
        data: { token },
        msg: "User registration successful",
      });
    }
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({
      code: 500,
      data: null,
      msg: "Registration failed",
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

module.exports = router;
