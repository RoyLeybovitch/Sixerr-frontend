<template>
    <header></header>
    <sixerr-header />
    <router-view />
    <sixerr-footer />
    <!-- <home-page></home-page> -->
</template>

<script>
import sixerrHeader from '../src/cmps/sixerr-header.cmp.vue'
import sixerrFooter from '../src/cmps/sixerr-footer.cmp.vue'
// import homePage from './views/home-page.vue'
// import { RouterLink } from 'vue-router'

export default {
    data() {
        return {}
    },
    components: {
        sixerrHeader,
        sixerrFooter,
        // homePage,
    },
    created() {
        // this.$store.dispatch({ type: 'loadCategories' })
    },
    methods: {},
    computed: {},
    unmounted() {},
}
</script>
