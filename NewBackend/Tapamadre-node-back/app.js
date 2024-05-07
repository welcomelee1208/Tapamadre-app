var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors"); // cors 미들웨어 추가
require("dotenv").config();
var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
var sequelize = require("./models/index.js").sequelize;

var adminRouter = require("./routes/adminApi.js");
var menuRouter = require("./routes/menuApi.js");
var blogRouter = require("./routes/blogApi.js");
var app = express();

sequelize.sync();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors()); // 모든 요청에 대해 CORS를 허용하는 미들웨어 추가

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/menu", menuRouter);
app.use("/blog", blogRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
