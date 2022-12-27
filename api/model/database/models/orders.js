module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNfId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderPath: {
      type: DataTypes.STRING,
    },
    orderFileName: {
      type: DataTypes.STRING,
    },
    orderOriginalName: {
      type: DataTypes.STRING,
    },
    emissionDate: {
      type: DataTypes.STRING,
    },
    pdfFile: {
      type: DataTypes.STRING,
    },
    emitedTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nNf: {
      type: DataTypes.STRING,
    },
    CTE: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    buyerId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    providerId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    orderStatusBuyer: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
    orderStatusProvider: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
    deliveryReceipt: {
      type: DataTypes.STRING,
    },
    cargoPackingList: {
      type: DataTypes.STRING,
    },
    deliveryCtrc: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
  }

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, { foreignKey: 'buyerId', as: 'buyer' });
  }

  Order.associate = (models) => {
    Order.belongsTo(models.Provider, { foreignKey: 'providerId', as: 'provider' });
  }

  Order.associate = (models) => {
    Order.hasOne(models.Offer, { foreignKey: 'orderId', as: 'orders' });
  }

  Order.associate = (models) => {
    Order.hasOne(models.Orderportion, { foreignKey: 'orderId', as: 'orders' });
  }

  return Order;
};
