const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 1024,
      unique: true,
      trim: true
    },
    Pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 1024,
      unique: true,
      trim: true
    },
    Category: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 1024,
      unique: true,
      trim: true
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-recipe.png"
    },
    ingredients :{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);


const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = RecipeModel;