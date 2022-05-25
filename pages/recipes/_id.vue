<template>
    <div>
        <Nav />
        
        <div v-for="rec in recipes" :key="rec.title"  class="recipe">
            <tr v-if="rec.title == $route.params.id">
            <!-- <tr v-if="rec.title == currentRec"> -->
                <h3 class="header">
                    {{rec.title}}
                </h3>

                <p class="snippet">
                    {{rec.pseudo}}
                    - 
                    {{rec.createdAt}}
                </p>
                

                <p class="category">
                    {{rec.Category}}
                </p>

                <!-- <div class="image">
                    <img src="~assets/jpg/bananabread.jpeg" alt="james cook" class="image">
                </div> -->

                <h4 class="subsection">INGREDIENTS</h4>
                <p class="text-container">
                    {{rec.ingredients}}
                </p>

                <h4>STEPS</h4>
                <p class="text-container">
                    {{rec.steps}}
                </p>
            </tr>
            <tr v-else></tr>
        </div>

    </div>
      
</template>
    
<script>
    import axios from "axios"
    export default {
        name: 'recPage',
        data() {
            return {
                recipes: null,
                // currentRec : route.params.id,
                // recipe: [],
            }
        },
        mounted(){
            axios.get('http://localhost:4000/api/recipe/')
            .then ((response)=> {
                // this.recipes=response.data;
                // this.recipes=response.data.find(rec => rec.title == $route.params.id);
                // this.recipes=response.data.find(rec => rec.title == "Quiche Lorraine");
                this.recipes=response.data;


                console.log(response.data);
            })

            .catch((error)=> {
                console.log(error);
            });
        },
        // computed: {
        //     recipe() {
        //         // return this.$store.getters.getProductById(this.$route.params.id);
        //            return recipes.find(rec => rec.title == $route.params.id);
        //     }
        // }
    }
</script>
    
<style scoped>
    .recipe {
        width: 50%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border: 0.4 rem;
        overflow: hidden;
        padding: 2%;
        cursor: pointer;
        border-radius: 1rem;
    }
</style >