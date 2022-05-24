<template>
    <div>
        <Nav />
        <div>
            <!-- <Tutorial /> -->
            Available soon...
        </div>
    </div>
</template>

<script>
    import Tutorial from '../components/newRecipe.vue'
    import { recipe_cards_data } from "@/assets/data.js"


    export default {
        components: {Tutorial },
        name: 'Settings',
        data() {
            return {
                recipeCardsInfo: recipe_cards_data
            }
        }
    }
</script>

<style scoped>

</style>