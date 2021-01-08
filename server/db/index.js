/* eslint-disable quotes */
// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

// Example: const Project = require("./models/project");
// Example: const Robot = require("./models/robot");
const db = require("./database");
const Dummy1 = require("./models/dummy");
const Dummy2 = require("./models/dummy2");

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example: Project.belongsToMany(Robot, { through: "Project_Robot" });
// Example: Robot.belongsToMany(Project, { through: "Project_Robot" });

module.exports = {
  // Include your models in this exports object as well!
  db,
  Dummy1,
  Dummy2,
};
