const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true
    },
    Pseudo: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    Category: {
      type: String,
      required: true,
      max: 1024,
      minlength: 3
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-recipe.png"
    },
    ingredients :{
      type: String,
      max: 1024,
    },
    date: {
      type: [String]
    }
  },
  {
    timestamps: true,
  }
);


const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = RecipeModel;