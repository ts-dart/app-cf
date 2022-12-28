module.exports = (sequelize, DataTypes) => {
  const buyer = sequelize.define('buyer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    tradingName: {
      type: DataTypes.STRING
    },
    cashforceTax: {
      type: DataTypes.STRING
    },
    responsibleName: {
      type: DataTypes.STRING
    },
    responsibleEmail: {
      type: DataTypes.STRING
    },
    responsiblePosition: {
      type: DataTypes.STRING
    },
    responsiblePhone: {
      type: DataTypes.STRING
    },
    responsibleMobile: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    postalCode: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.STRING
    },
    complement: {
      type: DataTypes.STRING
    },
    neighborhood: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    situation: {
      type: DataTypes.STRING
    },
    situationDate: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    confirm: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    email: {
      type: DataTypes.STRING
    }
  }, {});
  
  buyer.associate = (models) => {
    buyer.belongsTo(models.cnpj, { foreignKey: 'cnpjId' });
    buyer.hasOne(models.order, { foreignKey: 'buyerId' });
  }

  return buyer;
};
