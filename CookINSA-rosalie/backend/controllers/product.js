// Import function from Recette Model
import { getRecettes, getRecetteByTitre,getRecetteByCategorie,getLast10Recettes, insertRecette, updateRecetteById, deleteRecetteById } from "../models/recetteModel.js";
  
// Get All Recettes
export const showRecettes = (req, res) => {
    getRecettes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Recette 
export const showRecetteById = (req, res) => {
    getRecetteById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Recette
export const createRecette = (req, res) => {
    const data = req.body;
    insertRecette(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Recette
export const updateRecette = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateRecetteById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Recette
export const deleteRecette = (req, res) => {
    const id = req.params.id;
    deleteRecetteById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}