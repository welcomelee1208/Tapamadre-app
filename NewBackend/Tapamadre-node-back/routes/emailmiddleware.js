const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});
//문의사항답변 이메일
const sendInqAnswer = async (req, res, next) => {
  const inquiryId = req.params.id;
  const { inquiry_context, inquiry_answer, email } = req.body;

  let mailOptions = {
    from: '"Your Name or Company" <hyyi304@gmail.com>',
    to: email,
    subject: "Inquiry Response",
    text: `Inquiry ID: ${inquiryId}\nContext: ${inquiry_context}\nAnswer: ${inquiry_answer}`,
    html: `<b>Inquiry ID:</b> ${inquiryId}<br><b>Context:</b> ${inquiry_context}<br><b>Answer:</b> ${inquiry_answer}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.locals.emailInfo = info;
    next();
  } catch (error) {
    next(error); // 에러를 라우터의 catch 블록으로 전달
  }
};
//예약 확정 메일 전송처리 미들웨어
const sendReserveEmail = async (req, res, next) => {
  const reserveId = req.params.id;
  const {
    reserve_user_name,
    reserve_date,
    reserve_time,
    reserve_users,
    reserve_comment,
    reserve_user_email,
  } = req.body;
  let mailOptions = {
    from: '"예약안내입니다." <hyyi304@gmail.com>',
    to: reserve_user_email,
    subject: "@님의 예약 확정안내입니다.",
    text: `Reserve ID: ${reserveId}\n예약정보: 예약자명:${reserve_user_name},예약일:${reserve_date}, 예약시간:${reserve_time},예약 인원수:${reserve_users}, 예약코멘트:${reserve_comment}`,
    html: `<b>Reserve ID:</b> ${reserveId}<br>
    <b>Context:</b> 예약자명:${reserve_user_name},예약일:${reserve_date}, 예약시간:${reserve_time},예약 인원수:${reserve_users}, 예약코멘트:${reserve_comment}`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    res.locals.emailInfo = info;
    next();
  } catch (error) {
    next(error); // 에러를 라우터의 catch 블록으로 전달
  }
};
//회원가입시 이메일인증 전송처리 미들웨어

module.exports = { sendInqAnswer, sendReserveEmail };
