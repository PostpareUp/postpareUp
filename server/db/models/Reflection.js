const Sequelize = require('sequelize');
const db = require('../database');
const moment = require('moment')

module.exports = db.define('reflection', {
  companyName: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  interviewStage: {
    type: Sequelize.ENUM(['online application', 'initial phone screen', 'technical interview', 'on site', 'other'])

  },
  reflection: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  note: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  date: {  //do we need this? check again when component is done
    type: Sequelize.DATE,
    // get() {
    //   return moment(this.getDataValue('date')).format('DD/MM/YYYY h:mm:ss'); //moment.js?
  // }
  }
});
