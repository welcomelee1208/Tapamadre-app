var express = require("express");
var router = express.Router();

var db = require("../models/index");
var jwt = require("jsonwebtoken");
const { sendEmail } = require("./emailmiddleware"); // 미들웨어 객체에서 sendEmail 미들웨어를 가져옴
//반환할 api객체
var apiResult = {
  code: "",
  data: {},
  result: "",
};

//----------------------개발진행메모-------------
//문의사항 답변 보내기 부분 구현 필요

//문의사항 목록 조회
router.get("/all", async (req, res, next) => {
  try {
    var inquiryList = await db.Inquiries.findAll();

    return res.json({ code: "200", data: inquiryList, result: "Ok" });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in inquiryApi /all GET",
    });
  }
});

//문의사항 작성 처리
router.post("/create", async (req, res, next) => {
  try {
    var newInquiry = {
      inquiry_title: req.body.inquiry_title,
      inquiry_category_code: req.body.inquiry_category_code,
      inquiry_context: req.body.inquiry_context,
      ip_address: req.body.ip_address,
      inquiry_user_id: 0,
      inquiry_state_code: 0,
      reg_date: Date.now(),
      reg_user_name: req.body.reg_user_name,
      reg_user_email: req.body.reg_user_email,
      reg_user_telephone: req.body.reg_user_telephone,
    };

    //토큰이 존재할 경우 해체
    if (req.headers.authorization !== undefined) {
      var token = req.headers.authorization.split("Bearer ")[1];
      // var token = req.headers.authorization;
      console.log("token: ", token);
      var tokenJsonData = await jwt.verify(token, process.env.JWT_SECRET);

      //유효한 토큰일경우 inquiry_user_id를 token에서 추출한 member_id로 설정
      if (tokenJsonData) {
        newInquiry.inquiry_user_id = tokenJsonData.user_id;
      }
    }

    var dbInquiry = await db.Inquiries.create(newInquiry);

    return res.json({ code: "200", data: dbInquiry, result: "Ok" });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in inquiryApi /create POST",
    });
  }
});

//단일 문의사항 조회
router.get("/:id", async (req, res, next) => {
  try {
    var inquiryId = req.params.id;
    var inquiry = await db.Inquiries.findOne({
      where: { inquiry_id: inquiryId },
    });

    if (!inquiry)
      return res.json({ code: "400", data: null, result: "Inquiry not found" });
    else return res.json({ code: "200", data: inquiry, result: "Ok" });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: `Error in inquiryApi /${inquiryId} GET`,
    });
  }
});

// 문의사항 답변 sms/email 전송 요청 처리
router.post("/answer/:id", sendEmail, async (req, res, next) => {
  try {
    // sendEmail 미들웨어가 이미 처리한 후에 이 부분이 실행됨
    res.json({
      code: "200",
      message: "이메일 전송 성공",
      data: res.locals.emailInfo, // 이메일 전송 정보를 클라이언트에게 응답으로 전달
    });
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    res.status(500).json({
      code: "500",
      message: "이메일 전송 중 오류가 발생했습니다",
      error: error.message, // 에러 메시지를 응답으로 전달
    });
  }
});
module.exports = router;
