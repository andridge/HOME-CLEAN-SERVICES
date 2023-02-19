'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Admin', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      adminFirstname: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      adminLastname: {
        type: Sequelize.STRING
      },
      adminAddress: {
        type: Sequelize.STRING
      },
      adminPhone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Admin');
  }
};