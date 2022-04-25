'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('operators', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    operator_firstname: {
      type: Sequelize.STRING
    },
    operator_lastname: {
      type: Sequelize.STRING
    },
    operator_phone: {
      type: Sequelize.INTEGER
    },
    operator_email: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('operators');
}