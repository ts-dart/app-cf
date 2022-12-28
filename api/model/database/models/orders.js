module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
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
  }, {});

  order.associate = (models) => {
    order.belongsTo(models.cnpj, { foreignKey: 'cnpjId' });
    order.belongsTo(models.user, { foreignKey: 'userId' });
    order.belongsTo(models.buyer, { foreignKey: 'buyerId' });
    order.belongsTo(models.provider, { foreignKey: 'providerId' });
    order.hasOne(models.offer, { foreignKey: 'orderId' });
    order.hasOne(models.orderportion, { foreignKey: 'orderId' });
  };

  return order;
};
