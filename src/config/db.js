const { Sequelize } = require('sequelize');

module.exports= new Sequelize('shopee', 'root', 'Ba@1234', {
    host: 'localhost',
    dialect: 'mysql',
    timezone:'+07:00'
  });
