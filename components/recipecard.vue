<template>
    <NuxtLink :to="'/recipes/${recipeSection.id}'" class="card">
        <h3 class="header">
            {{recipeSection.title}}
        </h3>

        <p class="snippet">
            {{recipeSection.author}}
             - 
            {{recipeSection.date}}
        </p>
        

        <p class="category">
            {{recipeSection.category}}
        </p>

        <div class="image">
            <img src="~assets/jpg/plumpie.jpeg" alt="james cook" class="image">
        </div>

        <h4 class="subsection">INGREDIENTS</h4>
        <p class="text-container">
            {{recipeSection.ingredients}}
        </p>

        <!-- <h4>STEPS</h4>
        <p class="text-container">
            {{recipeSection.steps}}
        </p> -->
        <div class="centered">
            <!-- <button class="like-btn"> LIKE 🫶 </button> -->
            <button class="save-btn"> SAVE 🛟 </button>
        </div>
        
    </NuxtLink>
</template>

<script>
    export default {
        props: ["recipeSection"] // property pasted into the   `:recipeSection="cardInfo"`
    }
</script>

<style scoped>
    .subsection{
        margin-top: 1rem;
    }
    .card {
        width: 50%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border: 0.4 rem;
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
    .category {
        color: black;
        font-size: 1.1rem;
        width: 100%;
        /* margin-top: 1rem; */
        float: right;
    }
    .text-container {
        color: grey;
        font-size: 1.1rem;
        width: 100%;
        /* margin-top: 1rem; */
        float: right;
        font-weight: 100;
        font-style: italic; 
    }
    .header {
        /* margin-top: 2rem; */
        font-weight: 700;
        font-size: 2.5rem;
        color: rgb(11, 131, 236);
    }
    .snippet {
        color: grey;
        font-size: 1.25rem;
        float: left;
    }
    .image {
        width: 95%;
        height: 95%;
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
    /* .like-btn {
        padding: 1rem 3rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        width: 20rem;
        font-weight: 700;
        transition: 0.5s;
    } */
    .save-btn {
        padding: 0.7rem 2rem;
        border-radius: 100rem;
        background-color: rgb(0, 0, 0);
        color: white;
        width: 12rem;
        font-weight: 700;
        transition: 0.5s;
        align-items: center;
        vertical-align: middle;
    }
    .button:hover {
        width: 21.5rem;
        
    }
    @media (max-width: 500px) {
        .Hero {
            height: 40vh;
        }
    }
    /* .recipe_feed {
    margin-bottom: 5rem;
    }
    .centered {
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    }
    .Hero {
        height: 50vh;
        position: relative;
        display: flex;
        padding: 5rem 0;
        align-items: flex-start;
        justify-content: space-between;
    }
    .container {
        margin-top: 5rem;
        margin-bottom: 2rem;
        overflow: hidden;

    }
    /* .header {
        margin-top: 2rem;
        font-weight: 700;
        font-size: 2.5rem;
    } */
    /* .snippet {
        color: grey;
        margin-bottom: 1.5rem;
    } */
    /* .cards-container {
        display: flex;
        justify-content: space-between;
    } */
    /* .image {
        width: 27.5rem;
        margin-top: 2rem;
        border-radius: 7%;
    } */
    /* .image {
        width: 27.5rem;
        height: 20rem;
        border-radius: 1rem;
    }
    .button {
        padding: 1rem 4rem;
        border-radius: 50rem;
        background-color: rgb(219, 145, 127);
        color: rgb(101, 98, 98);
        width: 10rem;
        font-weight: 700;
        transition: 0.5s;
    }
    .button:hover {
        width: 21.5rem;
    }
    .open-btn {
        padding: 1rem 4rem;
        border-radius: 50rem;
        background-color: rgb(206, 172, 52);
        color: rgb(39, 39, 19);
        width: 20rem;
        font-weight: 700;
        transition: 0.5s;
    }
    .button:hover {
        width: 21.5rem;
    }
    .overlay {
        background: rgba(0, 0, 0, 0);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
    @media (max-width: 500px) {
        .Hero {
            height: 40vh;
        }
    } */
</style>