const { DataTypes } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "reservation",
    {
      reserve_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "예약고유번호",
      },
      reserve_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "예약자 고유번호",
      },
      reserve_user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "예약자 성명",
      },
      reserve_user_telephone: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "예약자 전화번호",
      },
      reserve_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "예약일자",
      },
      reserve_time: {
        type: DataTypes.TIME,
        allowNull: false,
        comment: "예약 시간",
      },
      reserve_type_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "예약 유형 코드 1:일반 2: 단체 3: 대관",
      },
      reserve_users: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "예약 인원수",
      },
      reserve_state_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "예약 상태  0:예약 미확정 1:예약 확정 2:방문함 3:미방문",
      },
      reserve_created_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "예약 생성일자",
      },
    },
    {
      sequelize,
      tableName: "reservation", //기본 테이블명 옵션이 복수형이 아닌 여기 지정한 테이블명으로 생성됨
      timestamps: false,
      comment: "홈페이지 회원정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "reserve_id" }], //여러개의 컬럼이 프라이머리키인경우(복합키){}추가하여 설정가능
        },
      ],
    }
  );
};
