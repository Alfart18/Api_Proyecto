const { Sequelize } = require('sequelize');
const { setupModels } = require('../db/modelos/index');

const user = 'postgres';
const host = 'localhost';
const port = 5432;
const password = 'Alfart';
const database = 'concesionaria';

const USUARIO = encodeURIComponent(user);
const PASSWORD = encodeURIComponent(password);

const URI = `postgres://${USUARIO}:${PASSWORD}@${host}:${port}/${database}`;
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
