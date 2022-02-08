"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "message",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        senderID: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "user",
            key: "id",
          },
        },
        receiverID: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "user",
            key: "id",
          },
        },
        content: { type: Sequelize.STRING, allowNull: false },
        sentAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("message");
  },
};
