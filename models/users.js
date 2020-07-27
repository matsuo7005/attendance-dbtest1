'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Users = loader.database.define(
  'users',
  {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
    ]
  }
);

module.exports = Users;