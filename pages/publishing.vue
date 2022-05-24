<template>
    <div>
        <Nav />
        <div>
            <newRecipe />
        </div>
    </div>
</template>

<script>
    import recipecard from '../components/recipecard.vue'
    import publishing_header from '../components/publishing_header.vue'
    import Nav from '../components/Nav.vue'
    import newRecipe from '../components/newRecipe.vue'

    import { recipe_cards_data } from "@/assets/data.js"

    export default {
        components: { recipecard, Nav, publishing_header, newRecipe },
        name: "publishing",
        data() {
            return {
                recipeCardsInfo: recipe_cards_data
            }
        }
    }
</script>

<style scoped>

</style>