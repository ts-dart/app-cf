module.exports = (sequelize, DataTypes) => {
  const offer = sequelize.define('offer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tariff: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adValorem: {
      type: DataTypes.STRING,
      allowNull: false
    },
    float: {
      type: DataTypes.STRING,
      allowNull: false
    },
    iof: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paymentStatusSponsor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    paymentStatusProvider: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    orderId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  }, {});

  offer.associate = (models) => {
    offer.belongsTo(models.order, { foreignKey: 'orderId' });
    offer.belongsTo(models.sponsor, { foreignKey: 'sponsorId' });
  }

  return offer;
};