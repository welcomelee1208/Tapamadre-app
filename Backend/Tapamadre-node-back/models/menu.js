const { DataTypes } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "menu",
    {
      menu_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "메뉴고유아이디",
      },
      menu_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "메뉴이름",
      },
      menu_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "메뉴 가격",
      },
      menu_desc: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "문의사항 내용",
      },
      menu_caution: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        comment: "메뉴 주의사항",
      },
      menu_type_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "메뉴타입코드 1:식사..2:디저트 3:주류 4:음료 9:기타메뉴",
      },
      main_img_state_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "메인이미지 게시여부  0:계시안함 1: 계시함",
      },
      set_menu_state_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "세트메뉴 여부 0:설정x 1: 설정함",
      },
    },
    {
      sequelize,
      tableName: "menu", //기본 테이블명 옵션이 복수형이 아닌 여기 지정한 테이블명으로 생성됨
      timestamps: false,
      comment: "홈페이지 회원정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "menu_id" }], //여러개의 컬럼이 프라이머리키인경우(복합키){}추가하여 설정가능
        },
      ],
    }
  );
};
