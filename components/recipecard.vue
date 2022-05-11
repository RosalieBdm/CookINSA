<template>
    <div classs="container" >
        <!-- <h4 class="header">
            Recipe Title
        </h4>
        <p class="author">
            by @anonynous_chef
        </p> -->
        <!-- <img src="~assets/jpg/plumpie.jpeg" alt="james cook" class="image"> -->


        <h4 class="header">
            {{recipeSection.title}}
        </h4>
        <p class="snippet">
            {{recipeSection.author}}
        </p>

        <img src="~assets/jpg/plumpie.jpeg" alt="plumpie" class="image">

        <button class="open btn"> Open </button>
    </div>
</template>

<script>
    export default {
        props: ["recipeSection"] // property pasted into the   `:recipeSection="cardInfo"`
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
    .container {
        margin-top: 5rem;
    }
    .header {
        font-weight: 700;
        font-size: 2.5rem;
    }
    .snippet {
        color: grey;
        margin-bottom: 1.5rem;
    }
    .cards-container {
        display: flex;
        justify-content: space-between;
    }
    .image {
        width: 27.5rem;
        margin-top: 2rem;
        border-radius: 7%;
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
    }
</style>