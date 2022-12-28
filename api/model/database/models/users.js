module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
    },
    verificationCode: {
      type: DataTypes.STRING,
    },
    emailChecked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cashforceAdm: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {});

  user.associate = (models) => {
    user.hasOne(models.order, { foreingKey: 'userId' });
  }

  return user;
};
