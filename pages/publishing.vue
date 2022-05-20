<template>
    <div>
        <Nav />
        <div>
            <Tutorial />
        </div>
    </div>
</template>

<script>
    import recipecard from '../components/recipecard.vue'
    import publishing_header from '../components/publishing_header.vue'
    import Nav from '../components/Nav.vue'
    import Tutorial from '../components/Tutorial.vue'

    import { recipe_cards_data } from "@/assets/data.js"

    export default {
        components: { recipecard, Nav, publishing_header, Tutorial },
        name: 'Publishing page',
        data() {
            return {
                recipeCardsInfo: recipe_cards_data
            }
        }
    }
</script>

<style scoped>

</style>