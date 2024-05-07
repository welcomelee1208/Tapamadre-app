const { DataTypes } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "admin",
    {
      admin_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "관리자고유아이디",
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "관리자 이름",
      },
      id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "아이디",
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "관리자계정 단방향 암호화 적용",
      },
      user_state_code: {
        type: DataTypes.TINYINT,
        allowNull: true,
        comment: "관리자 계정 상태코드 1:사용중 2:사용x",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "등록일자",
      },
      edit_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "수정일시",
      },

      last_login_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "마지막 로그인일자",
      },
    },
    {
      sequelize,
      tableName: "admin", //기본 테이블명 옵션이 복수형이 아닌 여기 지정한 테이블명으로 생성됨
      timestamps: false,
      comment: "홈페이지 관리자정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "admin_id" }], //여러개의 컬럼이 프라이머리키인경우(복합키){}추가하여 설정가능
        },
      ],
    }
  );
};
// 다른 모델과의 관계 설정
