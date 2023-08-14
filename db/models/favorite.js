"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Photo }) {
      this.belongsTo(User, { foreignKey: "user_id" }); // прописываем связь, избранного к другим таблицам (многие к одному) много избранных может быть у одного юзера
      this.belongsTo(Photo, { foreignKey: "photo_id" }); // прописываем связь, избраного к другим таблицам (иногие к одноу) во многих избранных будет быть у одного фото
    }
  }
  Favorite.init(
    {
      user_id: {
        allowNull: false, //поле не может быть пустым
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      photo_id: {
        allowNull: false, //поле не может быть пустым
        type: DataTypes.INTEGER,
        references: {
          model: "Photos",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
