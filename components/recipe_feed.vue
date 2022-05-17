<template>
    <div class="recipe_feed">
        <div class="col-3">
            <div class="text-container">
                <h1 class="header">Latest Recipes 🥗</h1>
                <p class="snippet">Hello guys! Here students share their best recipes you can try at home 😁. Don't forget to add yours!!!!</p>
                <button class="button btn">➕ Add recipe !</button>
            </div>
            <!-- <img src="~assets/jpg/jamescook.jpg" alt="james cook" class="image"> -->
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
        width: 100%;
    }
    .snippet {
        width: 100%;
        height: 100%;
        color: grey;
        font-size: 1.25rem;
        margin-top: 1rem;
    }
    .image {
        width: 40%;
        height: 40%;
        margin-top: 2rem;
        border-radius: 100%;
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