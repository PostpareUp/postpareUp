'use strict'

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))

const config = {
  databaseUrl: `postgres://localhost:5432/${pkg.name}`
};
// create the database instance that can be used in other database files
// const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
//   logging: false // so we don't see all the SQL queries getting made
// })

//sequelize deprecated String based operators are now deprecated. Solution to using Symbol based operators for better security
const db = new Sequelize(config.databaseUrl, {
  operatorsAliases: false,
});

module.exports = db
