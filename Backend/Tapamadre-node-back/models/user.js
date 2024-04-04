const { DataTypes } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user",
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "사용자고유아이디",
      },
      user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "사용자 이름",
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "이메일(로그인시 아이디로 활용)",
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "사용자계정 단방향 암호화 적용",
      },
      telephone: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "전화번호",
      },
      user_state_code: {
        type: DataTypes.TINYINT,
        allowNull: true,
        comment: "회원상태코드 1:가입 2:휴면계정 3:미인증 계증 9:탈퇴계정",
      },
      reg_type_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "회원가입 유형 코드:1직접가입 2:SNS",
      },
      auth_type_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "0:관리자,1:일반 사용자",
      },
      email_auth_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "이메일 인증여부 0:미인증 1:인증",
      },
      email_auth_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "이메일 인증일자",
      },
      telephone_auth_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "전화번호 인증여부 0:미인증 1:인증",
      },
      telephone_auth_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "전화번호 인증 일자",
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
      edit_member_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "수정자고유번호",
      },
      last_login_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "마지막 로그인일자",
      },
    },
    {
      sequelize,
      tableName: "user", //기본 테이블명 옵션이 복수형이 아닌 여기 지정한 테이블명으로 생성됨
      timestamps: false,
      comment: "홈페이지 회원정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "user_id" }], //여러개의 컬럼이 프라이머리키인경우(복합키){}추가하여 설정가능
        },
      ],
    }
  );
};
// 다른 모델과의 관계 설정
