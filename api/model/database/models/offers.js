module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
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
  }, {
    sequelize,
    modelName: 'Offer',
    tableName: 'offers',
  });

  Offer.associate = (models) => {
    Offer.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
  }

  Offer.associate = (models) => {
    Offer.belongsTo(models.Sponsor, { foreignKey: 'sponsorId', as: 'sponsor' });
  }

  return Offer
};