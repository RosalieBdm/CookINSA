<template>
    <div class="item-container">
        <!-- <img :src="require(`@/assets/images/${item.image}`)" alt=""> -->
        <img src="~assets/jpg/salmon.jpeg" alt="james cook" class="image">
        <div class="text-container">
            <h4> {{recipeSection.title}} </h4>
            <p> {{recipeSection.author}} </p>
            <p> {{recipeSection.author}} </p>
            <p> {{recipeSection.date}} </p>
        </div>
    </div>
</template>

<script>
    // export default {
        
    // }
    import my_items from '../pages/my_items.vue'
    export default {
        components: { my_items },
            props: ["recipeSection"] // property pasted into the   `:recipeSection="cardInfo"`
        }
</script>
<style scoped>
    .item-container {
        display: flex;
        margin: 3rem 0
    }
    .text-container {
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
    }
</style>