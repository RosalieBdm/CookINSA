<template>
    <div class="item">
        <!-- <div class="image"></div> -->
        <img src="~assets/jpg/bananabread.jpeg" alt="banabread" class="image">

        <div class="text-container">
            <h3 class="header"> {{recipeSection.title}} </h3>
            <p class="snippet"> {{recipeSection.author}} - {{recipeSection.date}} </p>
            <p class="category"> {{recipeSection.category}} </p>
        </div>
        <button class="btn"> UNSAVE 🚮 </button>
        
        <!-- <div class="centered">
            <button class="save-btn"> UNSAVE 🚮 </button>
        </div> -->

        

        <!-- <img :src="require(`@/assets/images/${item.image}`)" alt=""> -->
        <!-- <img src="~assets/jpg/salmon.jpeg" alt="james cook" class="image"> -->
        <!-- <div class="text-container"></div> -->
        
    </div>
</template>

<script>
    // export default {
        
    // }
    // import my_items from '../pages/my_items.vue'
    export default {
        // components: { my_items },
            props: ["recipeSection"] // property pasted into the   `:recipeSection="cardInfo"`
        }
</script>
<style scoped>
    .item {
        /* display: flex;  */
        /* margin: 3rem 0 */

        width: 70%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: 4rem;
        border: 0.6 rem;
        overflow: hidden;
        padding: 2%;
        cursor: pointer;
        border-radius: 1rem;
        display: flex;
    }
    /* .text-container {
        padding: 0 1rem
    }
    img {
        width: 17.5rem;
        border-radius: 0.5rem;
        height: 11rem
    }
    p {
        font-size: 0.8rem;
        color: grey
    } */




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
        /* display: flex; */
        width: 30%;
        margin-top: 1rem;
        margin: 2rem;
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
        width: 30rem;
        height: 22rem;
        /* vertical-align: middle;
        align-items: center; */
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
    .btn {
        padding: 0.7rem 2rem;
        border-radius: 100rem;
        background-color: rgb(0, 0, 0);
        color: white;
        width: 20rem;
        height: 5rem;
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
    




</style>