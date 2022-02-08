"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
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
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("friend_edge");
  },
};
