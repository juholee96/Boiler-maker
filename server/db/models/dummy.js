/* eslint-disable quotes */
const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("dummyModel", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});
