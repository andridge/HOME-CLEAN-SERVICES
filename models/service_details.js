'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Service_Details = sequelize.define('Service_Details', {
    serviceID: DataTypes.STRING,
    cleanerID: DataTypes.STRING,
    serviceTime: DataTypes.TIME,
    serviceDate: DataTypes.DATE,
    teamID:DataTypes.STRING
  }, {
//associations
  });
  return Service_Details;
};