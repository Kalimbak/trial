'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('drivers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    driver_firstname: {
      type: Sequelize.STRING
    },
    driver_lastname: {
      type: Sequelize.STRING
    },
    driver_phone: {
      type: Sequelize.INTEGER
    },
    driver_email: {
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
  await queryInterface.dropTable('drivers');
}