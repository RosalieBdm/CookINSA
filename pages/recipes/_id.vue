<template>
    <div>
        Hello I am recipe /recipe/id
        {{recipe}}
        this is the _id.vue page
        <!-- as we named it '_id' -->
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

</style>