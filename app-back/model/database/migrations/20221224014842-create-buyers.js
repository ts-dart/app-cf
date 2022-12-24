'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tradingName: {
        type: Sequelize.STRING
      },
      cashforceTax: {
        type: Sequelize.STRING
      },
      responsibleName: {
        type: Sequelize.STRING
      },
      responsibleEmail: {
        type: Sequelize.STRING
      },
      responsiblePosition: {
        type: Sequelize.STRING
      },
      responsiblePhone: {
        type: Sequelize.STRING
      },
      responsibleMobile: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      complement: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      situation: {
        type: Sequelize.STRING
      },
      situationDate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      email: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('buyers');
  }
};
