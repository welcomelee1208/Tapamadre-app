const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});
const sendEmail = async (req, res, next) => {
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
module.exports = { sendEmail };
