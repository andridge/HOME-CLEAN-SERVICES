'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cleaners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cleanerFirstname: {
        type: Sequelize.STRING
      },
      cleanerLastname: {
        type: Sequelize.STRING
      },
      cleanerAddress: {
        type: Sequelize.STRING
      },
      cleanerPhone: {
        type: Sequelize.STRING
      },
      cleanerEmail: {
        type: Sequelize.STRING
      },
      cleanerHourly:{
        type: Sequelize.DECIMAL(3)
      },
      longitude:{
        type:Sequelize.DECIMAL(11,8)
      },
      latitude:{
        type:Sequelize.DECIMAL(11,8)
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
    return queryInterface.dropTable('Cleaners');
  }
};