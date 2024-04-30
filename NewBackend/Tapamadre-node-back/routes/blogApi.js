var express = require("express");
var router = express.Router();

var db = require("../models/index");

var moment = require("moment");
var multer = require("multer");
//반환할 api객체
var apiResult = {
  code: "",
  data: {},
  result: "",
};
var storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/upload/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${moment(Date.now()).format("YYYYMMDDHHMMss")}_${file.originalname}`
    );
  },
});
const upload = multer({ storage: storage });
/* 이미지 파일첨부 기능 구현/ 관리자만 작성할수있는 권한 부여 필요 */

//test

router.get("/createblog", function (req, res, next) {
  res.render("createBlog");
});
// 게시글 목록 조회
//http://localhost:3001/blog/all
router.get("/all", async (req, res) => {
  // 게시글 목록을 반환하는 코드
  try {
    var blogList = await db.NewsEvent.findAll();
    return res.json({
      code: "200",
      data: blogList,
      result: "ok",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in blogAPI /all get",
    });
  }
});

// 게시글 생성
//http://localhost:3001/blog/create
router.post("/create", upload.single("main_img"), async (req, res) => {
  try {
    var title = req.body.title;
    var context = req.body.context;
    var article_type_code = req.body.article_type_code;
    var is_display_code = req.body.is_display_code;
    var ip_address = req.body.ip_address;
    // 파일 정보는 req.file에서 확인할 수 있습니다.
    var main_img_path = req.file ? req.file.path : ""; // 파일이 업로드되었다면 파일 경로를 저장
    var reg_member_id = req.body.reg_member_id;
    var reg_date = Date.now();
    var view_count = req.body.view_count || 0; // view_count가 제공되지 않았다면 기본값으로 0 설정

    var newArticle = {
      title,
      context,
      article_type_code,
      is_display_code,
      ip_address,
      main_img_path,
      reg_member_id,
      reg_date,
      view_count,
    };

    var dbBlog = await db.NewsEvent.create(newArticle);
    return res.json({
      code: "200",
      data: dbBlog,
      result: "ok",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "Error in blogAPI /create post",
    });
  }
});
//게시글 수정
//http://localhost:3001/blog/modify/:id
router.post("/modify/:id", async (req, res) => {
  try {
    var postId = req.params.id; // URL 매개변수에서 글 ID 가져오기
    var {
      title,
      context,
      article_type_code,
      is_display_code,
      ip_address,
      main_img_path,
      edit_member_id,
      edit_date,
    } = req.body;

    // ID로 글 찾기
    var postToUpdate = await db.NewsEvent.findOne({
      where: { article_id: postId },
    });

    if (!postToUpdate) {
      return res.json({
        code: "400",
        data: null,
        result: "해당 글을 찾을 수 없습니다.",
      });
    }

    // 업데이트된 속성 설정
    const updatedAttributes = {
      title,
      context,
      article_type_code,
      is_display_code,
      ip_address,
      main_img_path,
      edit_member_id,
      edit_date,
    };

    // 글 업데이트
    await postToUpdate.update(updatedAttributes);

    return res.json({
      code: "200",
      data: postToUpdate,
      result: "글이 성공적으로 수정되었습니다.",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "블로그 글 수정 중 오류가 발생했습니다.",
    });
  }
});

// DELETE 삭제: 블로그 글 삭제
//http://localhost:3001/blog/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    var postId = req.params.id; // URL 매개변수에서 글 ID 가져오기

    // ID로 글 찾기
    // var postToDelete = await db.NewsEvent.findByPk(postId);
    var postToDelete = await db.NewsEvent.findOne({
      where: { article_id: postId },
    });
    if (!postToDelete) {
      return res.json({
        code: "400",
        data: null,
        result: "해당 글을 찾을 수 없습니다.",
      });
    }

    // 글 삭제
    await postToDelete.destroy();

    return res.json({
      code: "200",
      data: null,
      result: "글이 성공적으로 삭제되었습니다.",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "블로그 글 삭제 중 오류가 발생했습니다.",
    });
  }
});
//게시글 단일건 조회
//http://localhost:3001/blog/:id
router.get("/:id", async (req, res, next) => {
  try {
    var blogId = req.params.id;

    // 해당 게시글 조회
    var singleBlogPost = await db.NewsEvent.findOne({
      where: { article_id: blogId },
    });

    // 해당 게시글이 존재하지 않을 경우
    if (!singleBlogPost) {
      return res.json({
        code: "400",
        data: null,
        result: "해당 게시글이 존재하지 않습니다.",
      });
    }

    // 조회수 증가
    singleBlogPost.view_count += 1;

    // 변경된 조회수 저장
    await singleBlogPost.save();

    return res.json({
      code: "200",
      data: singleBlogPost,
      result: "단일게시글 조회 성공",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      code: "500",
      data: null,
      result: "BlogApi 오류",
    });
  }
});

module.exports = router;
