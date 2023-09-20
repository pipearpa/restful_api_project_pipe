"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "John@gmail.com",
          password: "123456",
          phone: "31112345",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "David",
          email: "david@gmail.com",
          password: "321312",
          phone: "32199232",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
    await queryInterface.bulkDelete("Users", null, {});
  },
};
