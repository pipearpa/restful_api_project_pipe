'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', { //Users - Nombre de la base de datos
      id: { //Atributo id
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { //Atributo name
        type: Sequelize.STRING(100)
      },
      email: { //Atributo email
        type: Sequelize.STRING
      },
      phone: { //Atributo phone
        type: Sequelize.STRING(30),
        allowNull:true
      },
      password: { //Atributo password
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};