const Sequelize = require('sequelize');

const sequelize = new Sequelize();

const Cnpj = sequelize.define('cnpj', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  cnpj: {
    allowNull: false,
    type: Sequelize.STRING
  },
  companyType: {
    allowNull: false,
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

module.exports = Cnpj;
