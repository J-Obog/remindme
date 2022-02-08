const Sequelize = require("sequelize");
const db = require("../config/database");

const FriendEgde = db.define(
  "friend_edge",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    fromID: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    toID: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = FriendEgde;
