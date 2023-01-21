'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      longitude:{
        type:Sequelize.DECIMAL(11,8)
      },
      latitude:{
        type:Sequelize.DECIMAL(11,8)
      },
      userFirstName: {
        type: Sequelize.STRING
      },
      userLastName: {
        type: Sequelize.STRING
      },
      userService: {
        type: Sequelize.STRING
      },
      userPhone: {
        type: Sequelize.STRING
      },
      userAddress: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};