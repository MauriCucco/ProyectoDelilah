const sequelize = require("../config/db");

const beginOrder = () => sequelize.query("BEGIN");

const commitOrder = () => sequelize.query("COMMIT");

const rollbackOrder = () => sequelize.query("ROLLBACK");

module.exports = {
    beginOrder,
    commitOrder,
    rollbackOrder
}