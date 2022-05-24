const mongoose = require('mongoose');
// mongoose
//     .connect(
//        "mongodb+srv://SB-Test:test@cluster0.xqkxz.mongodb.net/mern-project",
//         // "mongodb://localhost:27017",
//         // "http://localhost:3000",
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
           
//         }
//     )
//     .then(() => console.log("Connected to MongoDB>>> "))
//     .catch((err) => console.log("Failed to connect to MongoDB >>> ", err));


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


const RecipeModel = mongoose.model("Recipes", recipeSchema);

module.exports = RecipeModel;