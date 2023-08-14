const { User } = require("../models");
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: "An",
        email: "an@an",
        password: await bcrypt.hash("123456", 10),
      },
      {
        name: "Gl",
        email: "gl@gl",
        password: await bcrypt.hash("123456", 10),
      },
      {
        name: "Ar",
        email: "ar@ar",
        password: await bcrypt.hash("123456", 10),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ where: {} });
  },
};
