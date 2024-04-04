module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "newsevnet",
    {
      article_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "글고유아이디",
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "제목",
      },
      context: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "글 내용",
      },
      reg_member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "작성자 아디",
      },
      article_type_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "글 유형 코드 0:공지 1:이벤트 2:소식",
      },
      is_display_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "게시여부 0:게시안함 1:게시함 2:임시저장 3:삭제됨",
      },
      ip_address: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "아이피 주소",
      },
      main_img_path: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "대표이미지 파일경로",
      },
      view_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "조회수",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "작성일",
      },
      edit_user_id: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "수정자ID",
      },
      edit_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "수정일시",
      },
    },
    {
      sequelize,
      tableName: "newsevent", //기본 테이블명 옵션이 복수형이 아닌 여기 지정한 테이블명으로 생성됨
      timestamps: false,
      comment: "홈페이지 회원정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "article_id" }], //여러개의 컬럼이 프라이머리키인경우(복합키){}추가하여 설정가능
        },
      ],
    }
  );
};
