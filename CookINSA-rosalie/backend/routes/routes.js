// import express
import express from "express";
  
// import function from controller
import { showRecettes, showRecetteById, createRecette, updateRecette, deleteRecette } from "../controllers/recette.js";
  
// init express router
const router = express.Router();
  
// Get All Recette
router.get('/recettes', showRecettes);
  
// Get Single Recette
router.get('/recettes/:id', showRecetteById);
  
// Create New Recette
router.post('/recettes', createRecette);
  
// Update Recette
router.put('/recettes/:id', updateRecette);
  
// Delete Recette
router.delete('/recettes/:id', deleteRecette);
  
// export default router
export default router;