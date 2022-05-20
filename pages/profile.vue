<template>
    <div>
        <Nav />
        <div>
            MyProfile page...
        </div>
    </div>
</template>

<script>
    import { recipe_cards_data } from "@/assets/data.js"

    export default {
        components: {},
        name: 'Profile page',
        data() {
            return {
                recipeCardsInfo: recipe_cards_data
            }
        }
    }
</script>

<style scoped>

</style>