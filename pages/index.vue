<template>
  <div>
    <Nav />
    <div class="container">
      <!-- <Nav /> -->
      <recipe_feed />

      <recipecard
        v-for="cardInfo in recipeCardsInfo"
        :key="cardInfo.id"
        :recipeSection="cardInfo"
      />

      <recipe_details
        v-for="cardInfo in recipeCardsInfo"
        :key="cardInfo.id"
        :recipeSection="cardInfo"
      />
      
    </div>
  </div>
</template>

<script>
  import recipecard from '../components/recipecard.vue'
  import recipe_feed from '../components/recipe_feed.vue'
  import recipe_details from '../components/recipe_details.vue'
  import Nav from '../components/Nav.vue'

  import { recipe_cards_data } from "@/assets/data.js"

  export default {
    components: { recipe_feed, recipecard, recipe_details, Nav },
    name: 'IndexPage',
    data() {
      return {
        recipeCardsInfo: recipe_cards_data
      }
    }
  }
</script>

<style>
  .container {
    margin-bottom: 5rem;
  }
</style>