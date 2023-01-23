'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Service = sequelize.define('Service', {
    serviceType: DataTypes.STRING,
    serviceDetails: DataTypes.STRING
  }, {
//associations
  });
  return Service;
};