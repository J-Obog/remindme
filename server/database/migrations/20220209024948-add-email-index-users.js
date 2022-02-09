"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex("user", ["email"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("user", ["email"]);
  },
};
