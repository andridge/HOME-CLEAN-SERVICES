'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cleanerID: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.TIME
      },
      endTime: {
        type: Sequelize.TIME
      },
      duration: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      customerID: {
        type: Sequelize.STRING
      },
      status:{
        type:Sequelize.STRING
      },
      action:{
        type:Sequelize.BOOLEAN
      },
      paymentType:{ 
        type:Sequelize.STRING
      },
      paymentAmount:{ 
        type:Sequelize.DECIMAL
      },
      paymentDate:{
        type:Sequelize.DATE
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
    return queryInterface.dropTable('Schedules');
  }
};