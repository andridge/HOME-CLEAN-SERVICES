'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Has = sequelize.define('Has', {
    customer: DataTypes.STRING,
    payment: DataTypes.STRING
  }, {
    //associtions,
  });
  return Has;
};