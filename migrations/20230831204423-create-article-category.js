'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArticleCategories', { //Nombre de la base de datos
      id: { //Atributo id 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      articleId: { //Atributo articleId
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Articles",
            key: "id"
          }
        }
      },
      categoryId: { //Atributo categoryId
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "Categories",
            key: "id"
          }
        }
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
    await queryInterface.dropTable('ArticleCategories');
  }
};