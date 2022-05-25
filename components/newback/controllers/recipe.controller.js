const RecipeModel = require("../models/recipe.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllRecipes = async (req, res) => {
  const recipes = await RecipeModel.find();
  res.status(200).json(recipes);
};

module.exports.recipeInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

    RecipeModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("");
};

/*module.exports.updateRecipe = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await RecipeModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          ingredients: req.body.ingredients,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.deleteRecipe = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await recipeModel.remove({ _id: req.params.id }).exec();
      res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
  */