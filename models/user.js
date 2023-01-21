'use strict';

module.exports = (sequelize, DataTypes) => {
 
  const User = sequelize.define('User',{
    userFirstName: DataTypes.STRING,
    userLastName: DataTypes.STRING,
    userService: DataTypes.STRING,
    userPhone: DataTypes.STRING,
    userAddress: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(11,8),
    longitude: DataTypes.DECIMAL(11,8),
  }, {
   //associtions
  });
  return User;
};