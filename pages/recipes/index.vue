<template>
    <div>
        <Nav />
        <div class="container">
            <!-- recipeCardsInfo.slice(0,1) -->
            <recipe_details
                v-for="cardInfo in recipeCardsInfo"
                :key="cardInfo.id"
                :recipeSection="cardInfo"
            />

        </div>
    </div>
</template>

<script>
    import recipe_details from '../../components/recipe_details.vue'
    import Nav from '../../components/Nav.vue'

    import { recipe_cards_data } from "@/assets/data.js"

    export default {
        components: { recipe_details, Nav },
        name: 'IndexPage',
        data() {
            return {
                recipeCardsInfo: recipe_cards_data
            }
        }
    // components: { Nav }   
    }
</script>

<style scoped>

</style>