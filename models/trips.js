const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Trip = sequelize.define(
  "trips",
  {
    // attributes
    trip_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_entities: {
      type: DataTypes.INTEGER,
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

module.exports = Trip;
