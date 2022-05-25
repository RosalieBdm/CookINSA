<template>
  <div>
    <Nav />
    <div class="container">
      <!-- <Nav /> -->
      <recipe_feed />

      <!-- <recipecard
        v-for="cardInfo in cards"
        :key="cardInfo.id"
        :recipeSection="cardInfo"
      /> -->

      <recipecard
        v-for="recipe in recipes"
        :key="recipe.title"
        :recipeSection="recipe"
      />

      <!-- <tr class="card" v-for="recipe in recipes" :key="recipe.title">
        <h3 class="header">
            {{recipe.Title}}
        </h3>

        <p class="snippet">
            {{recipe.Pseudo}}
             - 
            {{recipe.createdAt}}
        </p>
        

        <p class="category">
            {{recipe.Category}}
        </p>

        <div class="image">
            <img src="~assets/jpg/bananabread.jpeg" alt="james cook" class="image">
        </div>

        <h4 class="subsection">INGREDIENTS</h4>
        <p class="text-container">
            {{recipe.ingredients}}
        </p>

        <h4>STEPS</h4>
        <p class="text-container">
            {{recipeSection.steps}}
        </p>
        
      </tr> -->

      <!-- <recipe_details
        v-for="cardInfo in recipeCardsInfo"
        :key="cardInfo.id"
        :recipeSection="cardInfo"
      /> -->
      
    </div>
  </div>
</template>

<script>
  import recipecard from '../components/recipecard.vue'
  import recipe_feed from '../components/recipe_feed.vue'
  import recipe_details from '../components/recipe_details.vue'
  import Nav from '../components/Nav.vue'
  import axios from 'axios'

  // import { recipe_cards_data } from "@/assets/data.js"
  // import { mount } from '@vue/test-utils'

  export default {
    components: { recipe_feed, recipecard, recipe_details, Nav },
    name: 'IndexPage',
    data() {
      return {
        recipes: null,
        // recipeCardsInfo: recipe_cards_data
        // cards : {Title:'', Pseudo:'', Category: '', picture:'', ingredients: ''},
      }
    },
    mounted(){
      // axios.get('http://localhost:3000/api/post')
      axios.get('http://localhost:4000/api/recipe/')
      // axios.get('mongodb+srv://SB-Test:test@cluster0.xqkxz.mongodb.net/mern-project')
      .then ((response)=> {
        this.recipes=response.data;
        console.log(response.data);
      })
      .catch((error)=> {
        console.log(error);
      });
    }
  }
</script>

<style>
  .container {
    margin-bottom: 1rem;
  }
</style>