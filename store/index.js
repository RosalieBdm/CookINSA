// the goal is accessing this from any component



// import axios from "axios"
// export const rec = () => ({
//     recipes
    
//         axios.get('http://localhost:4000/api/recipe/')
//         .then ((response)=> {
//           this.recipes=response.data;
//           console.log("here it is", response.data);
//         })
//         // .catch((error)=> {
//         //   console.log(error);
//         // });
    
// })

// export const mutations = {
//     addItem(state, id){
//         let item = state.products.find(product => product.id == id)
//         state.myRentals.push(item)
//     },
// }

// export const getters = {
//     getProductByTitle: (state) => (title) => {
//         return state.products.find(product => product.id == id)
//     } 
// }


// export default {
//     data() {
//         return {
//           recipes: null,
//           // recipeCardsInfo: recipe_cards_data
//           // cards : {Title:'', Pseudo:'', Category: '', picture:'', ingredients: ''},
//         }
//       },
//     mounted(){
//         // axios.get('http://localhost:3000/api/post')
//         axios.get('http://localhost:4000/api/recipe/')
//         // axios.get('mongodb+srv://SB-Test:test@cluster0.xqkxz.mongodb.net/mern-project')
//         .then ((response)=> {
//           this.recipes=response.data;
//           console.log(response.data);
//         })
//         .catch((error)=> {
//           console.log(error);
//         });
//     }
// }