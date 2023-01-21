'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Uses = sequelize.define('Uses', {
    cleanerID: DataTypes.STRING,
    serviceID: DataTypes.STRING
  }, {
  //associations
  });
  return Uses;
};