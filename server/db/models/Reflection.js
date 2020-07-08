const Sequelize = require('sequelize');
const db = require('../database');
const moment = require('moment')

module.exports = db.define('reflection', {
  companyName: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  interviewStage: {
    type: Sequelize.ENUM({  values: ['online application','initial phone screen', 'technical interview', 'on site', 'other']})

  },
  reflection: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  note: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  date: {  //do we need this?
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('date')).format('DD/MM/YYYY h:mm:ss'); //moment.js?
  }
  }
});
