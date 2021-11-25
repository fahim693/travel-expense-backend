const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const PaidEntity = sequelize.define(
  "paid_entities",
  {
    // attributes
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expense_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paid_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

module.exports = PaidEntity;
