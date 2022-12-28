module.exports = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('cnpj', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cnpj: {
      allowNull: false,
      type: DataTypes.STRING
    },
    companyType: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});

  cnpj.associate = (models) => {
    cnpj.hasOne(models.buyer, { foreignKey: 'cnpjId' });
    cnpj.hasOne(models.provider, { foreignKey: 'cnpjId' });
    cnpj.hasOne(models.sponsor, { foreignKey: 'cnpjId' });
    cnpj.hasOne(models.order, { foreignKey: 'cnpjId' });
  }
  
  return cnpj;
};
