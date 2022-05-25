const RecipeModel = require('../models/recipe.model');

module.exports.createRecipe = async (req, res) => {
   console.log(req.body); 
  const {title, pseudo, category, ingredients, steps} = req.body

  try {
    const recipe = await RecipeModel.create({title, pseudo, category, ingredients, steps});
    res.status(201).json({ recipe: recipe._id});
  }
  catch(err) {
    res.status(200).send({ err })
  }
}
