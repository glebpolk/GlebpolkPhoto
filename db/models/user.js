"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Photo, Favorite }) {
      this.hasMany(Photo, { foreignKey: "user_id" }); // прописываем связь, юзера к другим таблицам (один ко многим) у одного юзера может быть много фото
      this.hasMany(Favorite, { foreignKey: "user_id" }); // прописываем связь, юзера к другим таблицам (один ко многим) у одного юзера может быть много избранных
    }
  }
  User.init(
    {
      name: {
        allowNull: false, //поле не может быть пустым
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false, //поле не может быть пустым
        unique: true, //значение должно быть уникальным
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false, //поле не может быть пустым
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
