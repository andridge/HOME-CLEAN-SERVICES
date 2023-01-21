'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Inventory = sequelize.define('Inventory', {
    inflow: DataTypes.INTEGER,
    outflow: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    cleaners: DataTypes.STRING
  }, {
    //associations
  });
  return Inventory;
};