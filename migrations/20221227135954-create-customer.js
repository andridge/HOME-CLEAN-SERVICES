'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerFirstname: {
        type: Sequelize.STRING
      },
      customerLastname: {
        type: Sequelize.STRING
      },
      customerAddress: {
        type: Sequelize.STRING
      },
      customerPhone: {
        type: Sequelize.STRING
      },
      customerEmail: {
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
    return queryInterface.dropTable('Customers');
  }
};