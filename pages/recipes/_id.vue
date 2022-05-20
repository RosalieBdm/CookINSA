<template>

    <div class="item">
        Hello I am recipe /recipe/id
        {{recipe}}
        this is the _id.vue page
        <!-- as we named it '_id' -->
        <!-- <img :src="require(`@/assets/images/${item.image}`)" alt=""> -->
        <img src="~assets/jpg/salmon.jpeg" alt="james cook" class="image">
        <div class="text-container">
            <h4> {{recipeSection.title}} </h4>
            <p> {{recipeSection.author}} </p>
            <p> {{recipeSection.author}} </p>
            <p> {{recipeSection.date}} </p>
        </div>
    </div>

</template

<script>
import { getters } from 'vuex'
    export default {
        computed: {
            recipe() {
                return this.$store.getters.getProductById(this.$route.params.id);
            }
        }
    }
</script>

<style scoped>
    .recipe {

        width: 50%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        /* border: 0.4 rem; */
        overflow: hidden;
        padding: 2%;
        border-radius: 1rem;
    }
</style>