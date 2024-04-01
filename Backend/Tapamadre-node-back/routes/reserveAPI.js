var express = require("express");
var router = express.Router();

var db = require("../models/index");
//반환할 api객체
var apiResult = {
  code: "",
  data: {},
  result: "",
};
// 예약 확정후 예약 확정 email/sms 보내는 기능 구현 필요
//예약 전체 목록 조회 (관리자)
// http://localhost:3001/reserve/all
router.get("/all", async (req, res, next) => {
  try {
    var reservationList = await db.Reservation.findAll();
    return res.json({
      code: "200",
      data: reservationList,
      result: "ok",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "error in reservationAPI",
    });
  }
});
//예약 생성
//http://localhost:3001/reserve/create
router.post("/create", async (req, res, next) => {
  try {
    var {
      reserve_user_id,
      reserve_user_name,
      reserve_user_telephone,
      reserve,
      date,
      reserve_time,
      reserve_type_code,
      reserve_users,
      reserve_state_code,
      reserve_create_date,
      reserve_comment,
    } = req.body;
    var newReservation = {
      reserve_user_id,
      reserve_user_name,
      reserve_user_telephone,
      reserve,
      date,
      reserve_time,
      reserve_type_code,
      reserve_users,
      reserve_state_code,
      reserve_create_date,
      reserve_comment,
    };
    var dbReservation = await db.Reservation.create(newReservation);
    return res.json({
      code: "200",
      data: dbReservation,
      result: "ok",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in blogApI",
    });
  }
});

//예약목록 조회(개인)
//http://localhost:3001/reserve/all/:userid
router.get("/all/:userid", async (req, res, next) => {
  try {
    var userId = req.params.userid;

    var privateReservation = await db.Reservation.findAll({
      where: { reserve_user_id: userId },
    });
    return res.json({
      code: "200",
      data: privateReservation,
      result: "개인예약 목록조회 성공",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "예약목록 조회 실패",
    });
  }
});
//단일 예약건 확인 처리
//http://localhost:3001/reserve/all/:id
router.post("/:id", async (req, res, next) => {
  try {
    var reserveId = req.params.id;
    var reserve_state_code = req.body.reserve_state_code;
    var reserve_confirm_date = req.body.reserve_confirm_date;
    var confirmReserve = await db.Reservation.findOne({
      where: { reserve_id: reserveId },
    });
    if (!confirmReserve) {
      return res.json({
        code: "400",
        data: null,
        result: "조회실패!",
      });
    }
    const updateReserve = { reserve_state_code, reserve_confirm_date };
    await confirmReserve.update(updateReserve);
    return res.json({
      code: "200",
      data: confirmReserve,
      result: "예약 확정처리 성공",
    });
  } catch (err) {
    return res.json({
      code: "500",
      data: null,
      result: "백엔드 오류",
    });
  }
});
//단일 예약 정보 조회
//http://localhost:3001/reserve/all/:id
router.get("/:id", async (req, res, next) => {
  try {
    var reserveId = req.params.id;
    var singleReserve = await db.Reservation.findOne({
      where: { reserve_id: reserveId },
    });
    if (!singleReserve) {
      return res.json({
        code: "400",
        data: null,
        result: "해당 예약건이 존재하지 않습니다.",
      });
    }
    return res.json({
      code: "200",
      data: singleReserve,
      result: "조회 성공",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: "null",
      result: "예약 Api 오류",
    });
  }
});
//예약 삭제
//http://localhost:3001/reserve/delete/:id
router.delete("/delete/:id", async (req, res, next) => {
  try {
    var reserveId = req.params.id;
    var DeletedReserve = await db.Reservation.findOne({
      where: { reserve_id: reserveId },
    });
    if (!DeletedReserve) {
      return res.json({
        code: "400",
        data: null,
        result: "해당예약이 없습니다.",
      });
    }
    await DeletedReserve.destroy();
    return res.json({
      code: "200",
      data: null,
      result: "예약 삭제 성공",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "삭제오류입니다.",
    });
  }
});
module.exports = router;
