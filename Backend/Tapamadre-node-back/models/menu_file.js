const { DataTypes } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "menu_files",
    {
      file_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "메뉴 첨부파일 고유번호",
      },
      menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "메뉴고유번호",
      },
      file_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "파일이름/확장자 포함",
      },
      file_size: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "파일크기",
      },
      file_path: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "파일경로",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "파일 업로드 날짜",
      },
      main_img_state_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "메인이미지 게시여부 ",
      },
    },
    {
      sequelize,
      tableName: "menufile", //기본 테이블명 옵션이 복수형이 아닌 여기 지정한 테이블명으로 생성됨
      timestamps: false,
      comment: "홈페이지 회원정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "fileID" }], //여러개의 컬럼이 프라이머리키인경우(복합키){}추가하여 설정가능
        },
      ],
    }
  );
};
