<template>
  <div class="container">
    <recipe_feed />
    <recipecard
      v-for="cardInfo in recipeCardsInfo"
      :key="cardInfo.id"
      :recipeSection="cardInfo"
    />

    <recipe-details
      v-for="cardInfo in recipeCardsInfo"
      :key="cardInfo.id"
      :recipeSection="cardInfo"
    />
    
  </div>
</template>

<script>
  import recipecard from '../components/recipecard.vue'
  import recipe_feed from '../components/recipe_feed.vue'
  import recipe_details from '../components/recipe_details.vue'

  import { recipe_cards_data } from "@/assets/data.js"

  export default {
    components: { recipe_feed, recipecard, recipe_details },
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