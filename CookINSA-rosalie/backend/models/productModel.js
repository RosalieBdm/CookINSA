// import connection
import db from "../config/database.js";
  
// Get All Recettess
export const getRecettes = (result) => {
    db.query("SELECT * FROM recettes", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get  Recettes by title
export const getRecetteByTitre = (titre, result) => {
    db.query("SELECT * FROM recettes WHERE titre = ?", [id], (titre, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get  Recettes by categorie
export const getRecetteByCategorie = (categorie, result) => {
    db.query("SELECT * FROM recettes WHERE categorie = ?", [id], (categorie, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get  10 last products
export const getLast10Recettes = (result) => {
    db.query("SELECT * FROM recettes ORDER BY date DESC LIMIT 10", (results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Insert Recettes to Database
export const insertRecettes = (data, result) => {
    db.query("INSERT INTO recettes SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Recettes to Database
export const updateRecettesById = (data, id, result) => {
    db.query("UPDATE recettes SET recettes_name = ?, recettes_price = ? WHERE recettes_id = ?", [data.recettes_name, data.recettes_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Recettes to Database
export const deleteRecettesById = (id, result) => {
    db.query("DELETE FROM recettes WHERE recettes_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}