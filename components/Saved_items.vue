<template>
    <div class="item-container">
        <!-- <img :src="require(`@/assets/images/${item.image}`)" alt=""> -->
        <img :src="require(`@/assets/jpg/jamescook.jpg`)" alt="">
        
        <div class="text-container">
            <h4> {{recipe.title}} </h4>
            <p> {{recipe.steps}} </p>
        </div>
    </div>
    
</template>

<script>
    // export default {
    //     props: ['item']
    // }

    export default {
        props: ['recipe']
    }

    // import { mapState } from 'vuex';
    // export default {
    //     layout: "no-nav",
    //     computed: {
    //         ...mapState([
    //             'recipes'
    //         ])
    //     }
    // }
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