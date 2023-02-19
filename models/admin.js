'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Admin = sequelize.define('Admin', {
    adminFirstname: DataTypes.STRING,
    adminLastname: DataTypes.STRING,
    password:DataTypes.STRING,
    adminAddress: DataTypes.STRING,
    adminPhone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    //associtions
  });
  return Admin;
};