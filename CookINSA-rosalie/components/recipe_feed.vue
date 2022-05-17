<template>
    <div class="recipe_feed">
        <div class="col-3">
            <div class="text-container">
                <h1 class="header">Latest Recipes</h1>
                <p class="snippet">Hello guys!</p>
                <button class="button btn">Add mine !</button>
            </div>
            <img src="~assets/jpg/jamescook.jpg" alt="james cook" class="image">
        </div>
        
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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
        font-weight: 900;
        font-size: 5rem;
    }
    .snippet {
        color: grey;
        font-size: 1.25rem;
    }
    .image {
        width: 27.5rem;
        margin-top: 2rem;
        border-radius: 100%;
    }
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