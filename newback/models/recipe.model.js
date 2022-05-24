const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pseudo: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    picture: {
      type: String
    },
    ingredients :{
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = RecipeModel;