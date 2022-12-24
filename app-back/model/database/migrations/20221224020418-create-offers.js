'use strict';
/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orderId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sponsors',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offers');
  }
};
