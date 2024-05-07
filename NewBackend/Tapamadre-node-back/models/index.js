const path = require("path");
const Sequelize = require("sequelize");

//개발모드 환경설정
const env = process.env.NODE_ENV || "development";

//DB연결 환경설정정보 변경처리//관련정보 수정
//const config = require(path.join(__dirname,'..','config','config.json'))[env];

//config.js모듈 파일 기반으로 DB연결정보 가져오기
const config = require("../config/config.js")[env];

//데이터 베이스 객체
const db = {};

const Admin = require("./admin.js");
const NewsEvent = require("./newsevent.js");
const Menu = require("./menu.js");
const MenuFile = require("./menu_file.js");
//DB연결정보로 시퀄라이즈 ORM 객체 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//DB 처리 객체에 시퀄라이즈 정보 맵핑처리
//이후 DB객체를 통해 데이터 관리가능해짐
db.sequelize = sequelize; //DB연결정보를 포함한 DB제어 객체속성(CRUD)
db.Sequelize = Sequelize; //Sequelize팩키지에서 제공하는 각종 데이터 타입 및 관련 객체정보를 제공함

db.Admin = Admin(sequelize, Sequelize);
db.NewsEvent = NewsEvent(sequelize, Sequelize);
db.Menu = Menu(sequelize, Sequelize);
db.MenuFile = MenuFile(sequelize, Sequelize);

// 관계 설정 부분입니다.

// User와 NewsEvent 모델 간의 관계 설정
db.Admin.hasMany(db.NewsEvent, { foreignKey: "reg_member_id" });
db.NewsEvent.belongsTo(db.Admin, { foreignKey: "reg_member_id" });
// Menu 모델이 MenuFile 모델을 참조합니다.
db.Menu.hasMany(db.MenuFile, { foreignKey: "menu_id" });
db.MenuFile.belongsTo(db.Menu, { foreignKey: "menu_id" });

// DB 객체를 내보냅니다.
module.exports = db;
