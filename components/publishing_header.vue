<template>
    <div class="feed container">
        <!-- <div class="text-container">
            <h1 class="header">Let's add a new dish!!! 🥞</h1>
            <button class="button btn">➕ Add recipe !</button>
        </div>         -->
        <Tutorial />

    </div>
</template>

<script>
    import Tutorial from './newRecipe.vue'
    import { recipe_cards_data } from "@/assets/data.js"


    export default {
        components: {Tutorial },
        name: 'Settings',
        data() {
            return {
                recipeCardsInfo: recipe_cards_data
            }
        }
    }
</script>

<style scoped>
    .feed {
        height: 50vh;
        /* position: relative; */
        display: flex;
        margin-right: 3rem;
        padding: 5rem 0;
        align-items: flex-start;
        justify-content: space-between;
    }
    .text-container {
        width: 50%;
        margin-top: 2rem;
        margin-left: 7rem;
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
        width: 30rem;
        height: 22rem;
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