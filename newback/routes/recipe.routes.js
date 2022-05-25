const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const recipeController = require("../controllers/recipe.controller")
// recipe DB
router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.recipeInfo);
//router.put("/:id", authController.updateRecipe);
//router.delete("/:id", authController.deleteRecipe);
router.post("/",authController.createRecipe);

module.exports = router;
