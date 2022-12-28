module.exports = (sequelize, DataTypes) => {
  const sponsor = sequelize.define('sponsor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tradingName: {
      type: DataTypes.STRING,
    },
    cashforceTax: {
      type: DataTypes.STRING,
    },
    responsibleName: {
      type: DataTypes.STRING,
    },
    responsibleEmail: {
      type: DataTypes.STRING,
    },
    responsiblePosition: {
      type: DataTypes.STRING,
    },
    responsiblePhone: {
      type: DataTypes.STRING,
    },
    responsibleMobile: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    complement: {
      type: DataTypes.STRING,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    bank: {
      type: DataTypes.STRING,
    },
    bankAgency: {
      type: DataTypes.STRING,
    },
    account: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    situation: {
      type: DataTypes.STRING,
    },
    situationDate: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    email: {
      type: DataTypes.STRING,
    },
  }, {});

  sponsor.associate = (models) => {
    sponsor.belongsTo(models.cnpj, { foreignKey: 'cnpjId' });
    sponsor.hasOne(models.offer, { foreignKey: 'sponsorId' });
  };

  return sponsor;
};
