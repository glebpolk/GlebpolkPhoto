"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ User, Favorite }) {
      this.belongsTo(User, { foreignKey: "user_id" }); // прописываем связь, фото к другим таблицам (один к одному) у одного фото может быть один юзер
      this.hasMany(Favorite, { foreignKey: "photo_id" }); // прописываем связь, фото к другим таблицам (один ко многим) одно фото может быть во многих избранных
    }
  }
  Photo.init(
    {
      img: {
        allowNull: false, //поле не может быть пустым
        type: DataTypes.TEXT,
      },
      title: {
        allowNull: false, //поле не может быть пустым
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false, //поле не может быть пустым
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false, //поле не может быть пустым
        type: DataTypes.INTEGER,
        references: {
          //где будет подтягиваться уникальный ключ прописываем условие, что данное значение относится к модели таблицы по кокнретному плючу
          model: "Users", //название связанной таблице во множественном числе
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Photo",
    }
  );
  return Photo;
};
