'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Belongs_to = sequelize.define('Belongs_to', {
    cleaner: DataTypes.STRING,
    team: DataTypes.STRING
  }, {
    //associtions
  });
  return Belongs_to;
};