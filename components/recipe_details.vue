<template>
    <div class="card">
        <h3 class="header">
            {{recipeSection.title}}
        </h3>

        <p class="snippet">
            {{recipeSection.author}}
             - 
            {{recipeSection.date}}
        </p>
        

        <p class="text-container">
            {{recipeSection.category}}
        </p>

        <div class="centered">
            <img src="~assets/jpg/jamescook.jpg" alt="james cook" class="image">
        </div>

        <h4 class="subsection">INGREDIENTS</h4>
        <p class="text-container">
            {{recipeSection.ingredients}}
        </p>

        <h4>STEPS</h4>
        <p class="text-container">
            {{recipeSection.steps}}
        </p>
        <div class="centered">
            <button class="like-btn"> LIKE 🫶 </button>
            <button class="save-btn"> SAVE 🛟 </button>
        </div>
        
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
    .subsection{
        margin-top: 1rem;
    }
    .card {
        width: 40%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border: 0.1 rem;
        overflow: hidden;
        padding: 2%;
        cursor: pointer;
        border-radius: 1rem;
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
        color: black;
        font-size: 1.1rem;
        width: 100%;
        margin-top: 1rem;
    }
    .header {
        
        font-weight: 700;
        font-size: 2.5rem;
    }
    .snippet {
        color: grey;
        font-size: 1.25rem;
    }
    .image {
        width: 80%;
        height: 80%;
        margin-top: 2rem;
        vertical-align: middle;
        align-items: center;
        border-radius: 1rem;
    }
    .overlay {
        background: rgba(0, 0, 0, 0);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
    .like-btn {
        padding: 1rem 3rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        width: 20rem;
        font-weight: 700;
        transition: 0.2s;
    }
    .save-btn {
        padding: 1rem 3rem;
        border-radius: 100rem;
        background-color: rgb(20, 70, 59);
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
    .centered {
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    }
</style>