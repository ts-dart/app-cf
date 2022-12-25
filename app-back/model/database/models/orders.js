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
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'cnpjs',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      },
    },
    buyerId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'buyers',
        key: 'id',
      },
    },
    providerId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'providers',
        key: 'id',
      },
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

  return Order;
};
