'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Requests = sequelize.define('Requests', {
    cleanerID: DataTypes.STRING,
    customerID: DataTypes.STRING,
    serviceID: DataTypes.STRING,
    teamID: DataTypes.STRING,
  }, {
    //associations
  });
  return Requests;
};