const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class news extends Model {}

news.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    news_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    news_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    news_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    writer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "writerDetail",
        key: "id",
      },
    },
    sub_category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "subCategory",
        key: "id",
      },
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "category",
        key: "id",
      },
    },
    news_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "news",
  }
);

module.exports = news;
