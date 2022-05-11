<template>
    <div class="card">
        <h3 class="header">
            {{recipeSection.title}}
        </h3>
        <p class="snippet">
            {{recipeSection.author}}
        </p>
        <img src="~assets/jpg/jamescook.jpg" alt="james cook" class="image">
        <h2 class="text-container">
            <h1>
                INGREDIENTS
            </h1>
            {{recipeSection.ingredients}}
        </h2>

        <h2 class="text-container">
            <h1>
                STEPS
            </h1>
            {{recipeSection.steps}}
        </h2>
        <button class="open btn"> LIKE </button>
        <button class="open btn"> SAVE </button>
    </div>
</template>

<script>
import index from '../pages/index.vue'
    export default {
  components: { index },
        props: ["recipeSection"] // property pasted into the   `:recipeSection="cardInfo"`
    }
</script>

<style scoped>
    .card {
        width: 31.5%;
        height: 25rem;
        border: none;
        overflow: hidden;
        padding: 0;
        cursor: pointer;
    }
    .image {
        height: 65%;
        border-radius: 0.5rem;
    }
    .Hero {
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
        margin-top: 2rem;
        font-weight: 700;
        font-size: 2.5rem;
    }
    .snippet {
        color: grey;
        font-size: 1.25rem;
    }
    /* .image {
        width: 27.5rem;
        margin-top: 2rem;
        border-radius: 100%;
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
        transition: 0.5s;
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