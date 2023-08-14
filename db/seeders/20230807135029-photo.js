"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const photosData = [
      {
        img: "/img/1.JPG",
        title: "Полина",
        description: "Творческая фотосъемка",
        user_id: 15,
      },
      {
        img: "/img/4.JPG",
        title: "Арина",
        description: "Творческая фотосъемка",
        user_id: 16,
      },
      {
        img: "/img/3.JPG",
        title: "Юля",
        description: "Творческая фотосъемка",
        user_id: 17,
      },
      {
        img: "/img/2.JPG",
        title: "Саша",
        description: "Творческая фотосъемка",
        user_id: 16,
      },
    ];
    const photos = photosData.map((photo) => ({
      ...photo,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Photos", photos);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Photos");
  },
};
