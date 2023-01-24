'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Cleaner = sequelize.define('Cleaner', {
    teamID: DataTypes.STRING,
    cleanerFirstname: DataTypes.STRING,
    cleanerLastname: DataTypes.STRING,
    cleanerAddress: DataTypes.STRING,
    cleanerPhone: DataTypes.STRING,
    cleanerEmail: DataTypes.STRING,
    cleanerHourly:DataTypes.DECIMAL(3),
    latitude: DataTypes.DECIMAL(11,8),
    longitude: DataTypes.DECIMAL(11,8),
  }, {
//associtions
  });
  return Cleaner;
};