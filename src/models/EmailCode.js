const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const EmailCode = sequelize.define("emailCodes", {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //userId
});

module.exports = EmailCode;
