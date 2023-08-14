"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Photos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      img: {
        allowNull: false, //поле не может быть пустым
        type: Sequelize.TEXT,
      },
      title: {
        allowNull: false, //поле не может быть пустым
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false, //поле не может быть пустым
        type: Sequelize.TEXT,
      },
      user_id: {
        allowNull: false, //поле не может быть пустым
        type: Sequelize.INTEGER,
        references: {
          //где будет подтягиваться уникальный ключ прописываем условие, что данное значение относится к модели таблицы по кокнретному плючу
          model: "Users", //название связанной таблице во множественном числе
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Photos");
  },
};
