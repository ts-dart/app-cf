const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Sponsor = sequelize.define('Sponsor', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tradingName: {
      type: Sequelize.STRING,
    },
    cashforceTax: {
      type: Sequelize.STRING,
    },
    responsibleName: {
      type: Sequelize.STRING,
    },
    responsibleEmail: {
      type: Sequelize.STRING,
    },
    responsiblePosition: {
      type: Sequelize.STRING,
    },
    responsiblePhone: {
      type: Sequelize.STRING,
    },
    responsibleMobile: {
      type: Sequelize.STRING,
    },
    website: {
      type: Sequelize.STRING,
    },
    postalCode: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    number: {
      type: Sequelize.STRING,
    },
    complement: {
      type: Sequelize.STRING,
    },
    neighborhood: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    bank: {
      type: Sequelize.STRING,
    },
    bankAgency: {
      type: Sequelize.STRING,
    },
    account: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    situation: {
      type: Sequelize.STRING,
    },
    situationDate: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    cnpjId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
    email: {
      type: Sequelize.STRING,
    },
  }, {
    tableName: 'sponsors',
    timestamps: false,
  });

  Sponsor.associate = (models) => {
    Sponsor.belongsTo(models.Cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
    });
  };

  Sponsor.associate = (models) => {
    Sponsor.hasOne(models.Offer, { foreignKey: 'sponsorId', as: 'sponsors' });
  }

  return Sponsor;
};