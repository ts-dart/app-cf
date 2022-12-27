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

Cnpj.associate = (models) => {
  Cnpj.hasOne(models.Buyer, { foreignKey: 'cnpjId', as: 'buyers' });
}

Cnpj.associate = (models) => {
  Cnpj.hasOne(models.Provider, { foreignKey: 'cnpjId', as: 'providers' });
}

Cnpj.associate = (models) => {
  Cnpj.hasOne(models.Sponsor, { foreignKey: 'cnpjId', as: 'sponsors' });
}

Cnpj.associate = (models) => {
  Cnpj.hasOne(models.Order, { foreignKey: 'cnpjId', as: 'orders' });
}

module.exports = Cnpj;
