var express = require("express");
var router = express.Router();

var db = require("../models/index");
var multer = require("multer");
const fs = require("fs");
const path = require("path");
//반환할 api객체

var apiResult = {
  code: "",
  data: {},
  result: "",
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/menuImg/");
  },
  filename(req, file, cb) {
    const fileExtension = file.originalname.split(".").pop(); // 확장자 추출
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // 현재 시간과 랜덤한 숫자로 파일 이름 생성
    cb(null, `${uniqueSuffix}.${fileExtension}`); // 새로운 파일 이름에 확장자 추가
  },
});
//파일 업로드 객체 정의
var upload = multer({ storage: storage });

//파일 업로드 테스트용 페이지
router.get("/uploadTest", async (req, res, next) => {
  res.render("fileUploadtest");
});

//----------------------개발진행메모-------------
//GET 메소드 정상 작동 확인
//POST 작동
//file 관련 구현 미완료

//메뉴 목록 조회
router.get("/all", async (req, res, next) => {
  try {
    // 메뉴 데이터와 관련된 파일 데이터 함께 가져오기
    var menuList = await db.Menu.findAll({
      include: db.MenuFile,
    });

    return res.json({ code: "200", data: menuList, result: "Ok" });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in menuApi /all GET",
    });
  }
});

//메뉴 업로드
router.post("/create", upload.single("menu_image"), async (req, res, next) => {
  try {
    console.log("업로드 파일: ", req.file);

    var newMenu = {
      menu_name: req.body.menu_name,
      menu_price: req.body.menu_price,
      menu_desc: req.body.menu_desc,
      menu_type_code: req.body.menu_type_code,
      main_img_state_code: 0,
      set_menu_state_code: 0,
      categorized_menu_code: req.body.categorized_menu_code,
      is_display_code: 0,
    };

    var dbMenu = await db.Menu.create(newMenu);

    if (req.file) {
      const newFile = {
        menu_id: dbMenu.menu_id,
        file_name: req.file.filename,
        file_size: req.file.size,
        file_path: `/menuImg/${req.file.filename}`,
        reg_date: Date.now(),
        main_img_state_code: 0,
      };

      var fileupload = await db.MenuFile.create(newFile);
    }
    return res.json({ code: "200", data: dbMenu, fileupload, result: "Ok" });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in menuApi /create POST",
    });
  }
});
router.post(
  "/update/:id",
  upload.single("menu_image"),
  async (req, res, next) => {
    try {
      var menuId = req.params.id;
      var updateMenu = {
        menu_name: req.body.menu_name,
        menu_price: req.body.menu_price,
        menu_desc: req.body.menu_desc,
        menu_type_code: req.body.menu_type_code,
        main_img_state_code: req.body.main_img_state_code,
        set_menu_state_code: JSON.parse(req.body.set_menu_state_code), // 배열로 파싱
        is_display_code: req.body.is_display_code,
        categorized_menu_code: req.body.categorized_menu_code,
      };
      var affectedCnt = await db.Menu.update(updateMenu, {
        where: { menu_id: menuId },
      });

      if (req.file) {
        // 새로운 이미지 파일 업로드
        const newFile = {
          menu_id: menuId,
          file_name: req.file.filename,
          file_size: req.file.size,
          file_path: `/menuImg/${req.file.filename}`,
          reg_date: new Date(),
          main_img_state_code: req.body.main_img_state_code,
        };

        var dbFile = await db.MenuFile.create(newFile);
      }

      // 성공 응답
      return res.json({
        code: "200",
        data: affectedCnt,
        result: "Ok",
      });
    } catch (err) {
      // 에러 처리
      console.error(err);
      return res.status(500).json({
        code: "500",
        data: null,
        result: "Error",
        message: "메뉴 정보 수정 중 오류가 발생했습니다.",
      });
    }
  }
);

// 메뉴 삭제 처리
router.delete("/delete/:id", async (req, res, next) => {
  try {
    var menuId = req.params.id;

    // 메뉴 파일 정보 조회
    var menuFiles = await db.MenuFile.findAll({
      where: { menu_id: menuId },
    });

    // 메뉴 파일 storage에서 삭제
    await Promise.all(
      menuFiles.map(async (file) => {
        const filePath = path.join("public/menuImg", file.file_name);
        try {
          // 파일이 존재하는지 확인 후 삭제 시도
          if (fs.existsSync(filePath)) {
            await fs.promises.unlink(filePath);
            console.log(`${filePath} 파일이 성공적으로 삭제되었습니다.`);
          } else {
            console.log(`${filePath} 파일을 찾을 수 없습니다.`);
          }
        } catch (err) {
          console.error("파일 삭제 중 에러 발생:", err);
        }
      })
    );

    // DB에서 메뉴와 메뉴 파일 정보를 모두 삭제
    var affectedCnt = await db.Menu.destroy({ where: { menu_id: menuId } });
    var affectedFileCnt = await db.MenuFile.destroy({
      where: { menu_id: menuId },
    });

    return res.json({
      code: "200",
      data: { affectedCnt, affectedFileCnt },
      result: "Ok",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: "500",
      data: null,
      result: `Error in menuApi /delete/${req.params.id} DELETE`,
    });
  }
});

//단일 메뉴 정보 조회
router.get("/:id", async (req, res, next) => {
  try {
    var menuId = req.params.id;
    // 메뉴 정보 조회
    var menu = await db.Menu.findOne({ where: { menu_id: menuId } });
    if (!menu) {
      return res.json({ code: "400", data: null, result: "Menu not found" });
    }

    // 메뉴 파일 정보 조회
    var menuFiles = await db.MenuFile.findAll({
      where: { menu_id: menuId },
    });

    // 메뉴 정보와 파일 정보 함께 전송
    return res.json({
      code: "200",
      data: { menu, files: menuFiles },
      result: "Ok",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: `Error in menuApi /${menuId} GET`,
    });
  }
});

//export router
module.exports = router;
