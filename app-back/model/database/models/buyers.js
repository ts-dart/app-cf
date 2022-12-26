const Sequelize = require('sequelize');

const sequelize = new Sequelize();

const Buyer = sequelize.define('buyer', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  tradingName: {
    type: Sequelize.STRING
  },
  cashforceTax: {
    type: Sequelize.STRING
  },
  responsibleName: {
    type: Sequelize.STRING
  },
  responsibleEmail: {
    type: Sequelize.STRING
  },
  responsiblePosition: {
    type: Sequelize.STRING
  },
  responsiblePhone: {
    type: Sequelize.STRING
  },
  responsibleMobile: {
    type: Sequelize.STRING
  },
  website: {
    type: Sequelize.STRING
  },
  postalCode: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  number: {
    type: Sequelize.STRING
  },
  complement: {
    type: Sequelize.STRING
  },
  neighborhood: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  situation: {
    type: Sequelize.STRING
  },
  situationDate: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  cnpjId: {
    type: Sequelize.INTEGER,
    foreignKey: true
  },
  confirm: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  email: {
    type: Sequelize.STRING
  }
});

Buyer.associate = (models) => {
  Buyer.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
}

Buyer.associate = (models) => {
  Buyer.hasOne(models.Order, { foreignKey: 'buyerId', as: 'buyers' });
}

module.exports = Buyer;
