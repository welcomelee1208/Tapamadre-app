var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config(); // dotenv를 사용하여 환경 변수를 로드합니다.
var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
var sequelize = require("./models/index.js").sequelize;

//api 라우터 참조
var memberRouter = require("./routes/memberApi.js");
var menuRouter = require("./routes/menuApi.js");
var inquiryRouter = require("./routes/inquiryApi.js");
var blogRouter = require("./routes/blogApi.js");
var reservationRouter = require("./routes/reserveApi.js");
var app = express();
//mysql과 자동연결처리 및 모델기반 물리 테이블 생성처리제공
sequelize.sync();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/user", memberRouter);
app.use("/menu", menuRouter);
app.use("/inquiry", inquiryRouter);
app.use("/blog", blogRouter);
app.use("/reserve", reservationRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
