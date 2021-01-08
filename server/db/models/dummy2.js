/* eslint-disable quotes */
const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("dummy2", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/FP1GJPmPpu61YAv553ZgMRpHvNk=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/HCIJCIQ2UAI6VKP2L3WHYVGSUE.jpg",
  },
});
