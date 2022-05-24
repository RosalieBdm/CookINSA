<template>
    <div class="recipe_feed container">
        <div class="text-container">
            <h1 class="header">Latest Recipes 🥗</h1>
            <p class="snippet">Hello guys! Here students share their best recipes you can try at home 😁... Don't forget to add yours!!!!</p>
            <!-- <v-btn
            to="../pages/publishing.vue"
            @click="next"
            class="button btn">btn
            </v-btn> -->
            <!-- @click="next"> -->
            <router-link to="/publishing">
                <button class="button btn">➕ Add recipe !</button>
            </router-link>
        </div>
        <img src="~assets/jpg/jamescook.jpg" alt="james cook" class="image">
    </div>
    <!-- <div> -->
    <!-- <v-container> -->
        <!-- <v-row>
            <v-col cols="2">
                <h1 class="header">Latest Recipes 🥗</h1>
            </v-col>
            <v-col cols="2">
                <p class="snippet">Hello guys! Here students share their best recipes you can try at home 😁</p>
                <p class="snippet">Don't forget to add yours!!!!</p>
                <button class="button btn">➕ Add recipe !</button>
            </v-col>
        </v-row> -->
    <!-- <v-container> -->
    <!-- </div> -->

    <!-- <div class="recipe_feed">
        <div class="col-5">
            <div class="text-container">
                <h1 class="header">Latest Recipes 🥗</h1>
                <p class="snippet">Hello guys! Here students share their best recipes you can try at home 😁. Don't forget to add yours!!!!</p>
                <button class="button btn">➕ Add recipe !</button>
            </div>
            <img src="~assets/jpg/jamescook.jpg" alt="james cook" class="image">
        </div>
    </div> -->
</template>

<script>
import { mapState} from "vuex" // it maps every state from @/store/index.js and make it avialable for evryone
    export default {
        computed: {
            ...mapState([
                'data1',
                'data2',
                'data3'
            ]) // the goal is to destructurized the original data and to separate dataNs
        },
        methods:{
            next() {
                // axios.post(...)
                alert("bonjour")
                print("a")
            },
        }
    }
</script>

<style scoped>

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