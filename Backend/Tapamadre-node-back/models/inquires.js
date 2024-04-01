const { DataTypes } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "inquiries",
    {
      inquiry_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "문의사항 고유아이디",
      },
      inquiry_title: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "문의사항 제목",
      },
      inquiry_category_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "문의사항 분류코드 0:기타 1:예약관련 ",
      },
      inquiry_context: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "문의사항 내용",
      },
      ip_address: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "작성자ip주소",
      },
      inquiry_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "문의사항 작성 회원id 0:비회원, 1이상: 회원ID가입",
      },
      inquiry_state_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "문의 확인 여부 0:관리자 미확인,1:확인완료",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "작성일",
      },
      reg_user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "작성자 이름",
      },
      reg_user_email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "작성자 이메일",
      },
      reg_user_telephone: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "작성자 전화번호 ",
      },
      inquiry_answer: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        comment: "문의사항답변",
      },
    },
    {
      sequelize,
      tableName: "inquiry", //기본 테이블명 옵션이 복수형이 아닌 여기 지정한 테이블명으로 생성됨
      timestamps: false,
      comment: "홈페이지 회원정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "inquiry_id" }], //여러개의 컬럼이 프라이머리키인경우(복합키){}추가하여 설정가능
        },
      ],
    }
  );
};
