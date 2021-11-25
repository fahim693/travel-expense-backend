const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Entity = sequelize.define(
  "entities",
  {
    // attributes
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    entity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deposit: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    expense: {
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

module.exports = Entity;
