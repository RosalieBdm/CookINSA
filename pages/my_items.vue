<template>
    <div>
        <Nav />

        <div class="recipe_feed container">
            <div class="text-container">
                <h1 class="header">Saved Recipes 🥙</h1>
                <!-- <p class="snippet">Hello guys! Here students share their best recipes you can try at home 😁... Don't forget to add yours!!!!</p> -->
                <!-- <button class="button btn">➕ Add recipe !</button> -->
            </div>
            <img src="~assets/jpg/wallet.png" alt="wallet" class="image">

            <!-- Hello I am recipe /recipe/id
            {{recipe}} -->
            <!-- as we named it '_id' -->
        </div>
        
        <div>
            <myitemscard
                v-for="cardInfo in recipeCardsInfo"
                :key="cardInfo.id"
                :recipeSection="cardInfo"
            />
        </div>

        <!-- <div class="container">
            <Saved_items 
                v-for="recipe in recipes"
                :key="recipe.id"
                :item="recipe"
            />
        </div>   -->
        <!-- <div class="container">
            <MyItem 
                v-for="rental in myRentals"
                :key="rental.id"
                :item="rental"
            />
        </div> -->
    </div>
</template>


<script>
// import Saved_items from '../components/Saved_items.vue'
import recipecard from '../components/recipecard.vue'
import Nav from '../components/Nav.vue'
import myitemscard from '../components/myitemscard.vue'

import { recipe_cards_data } from "@/assets/data.js"

export default {
    components: { recipecard, Nav, myitemscard },
    name: 'IndexPage',
    data() {
      return {
        recipeCardsInfo: recipe_cards_data
      }
    }
}

  // export default {
    //     // layout: "no-nav",
    //     computed: {
    //         recipe() {
    //             return this.$store.getters.getProductById(this.$route.params.id);
    //         }   
    //     }
    // }
</script>

<style scoped>
    .container {
        padding: 6rem 0
    }
    .recipe_feed {
        height: 50vh;
        position: relative;
        display: flex;
        padding: 5rem 0;
        align-items: flex-start;
        justify-content: space-between;
    }
    .text-container {
        width: 50%;
        margin-top: 4rem;
    }
    .header {
        /* margin-top: 2rem; */
        font-weight: 900;
        font-size: 5rem;
        width: 100%;
    }
    .snippet {
        /* width: 100%;
        height: 100%;
        color: grey;
        font-size: 1.25rem;
        margin-top: 1rem; */

        color: grey;
        font-size: 1.25rem;
        float: left;
    }
    .image {
        width: 45%;
        height: 75%;
        margin-top: 2rem;
        border-radius: 1rem;
    }
    /* .image {
        width: 27.5rem;
        margin-top: 2rem;
        height: 20rem;
        border-radius: 1rem;
    } */
    .overlay {
        background: rgba(0, 0, 0, 0);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
    .button {
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        width: 20rem;
        font-weight: 700;
        transition: 0.2s;
    }
    .button:hover {
        width: 21.5rem;
    }
    @media (max-width: 500px) {
        .Hero {
            height: 40vh;
        }
    }
    .recipe_feed {
        margin-bottom: 5rem;
    }
</style>