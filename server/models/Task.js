const Sequelize = require("sequelize")

const db = require("../database/dbSettings.js")
const { sequelize } = require("../database/dbSettings.js")
const { route } = require("../routes/tasks.js")
const router = require("../routes/tasks.js")

module.exports = db.sequelize.define(
    "tbl_tasks",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      task_name: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false
    }
  );

