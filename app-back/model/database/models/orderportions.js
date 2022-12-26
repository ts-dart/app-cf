module.exports = (sequelize, DataTypes) => {
  const Orderportions = sequelize.define('Orderportions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nDup: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dVenc: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    vDup: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    availableToMarket: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    orderId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
  });

  Orderportions.associate = (models) => {
    Orderportions.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
  }

  return Orderportions;
};