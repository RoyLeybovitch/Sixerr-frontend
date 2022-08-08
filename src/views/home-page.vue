<template>
    <section class="homepage-container">
        <sixerr-hero />
        <trusted-by />
        <carousel-category class="main-layout" :categories="getCategories" />
        <main-info />
    </section>
</template>

<script>
import { gigService } from '../services/gig-service'
import sixerrHero from '../cmps/sixerr-hero.cmp.vue'
import mainInfo from '../cmps/main-info.cmp.vue'
import carouselCategory from '../cmps/carousel-category.vue'
import trustedBy from '../cmps/trusted-by.cmp.vue'

export default {
    data() {
        return {
            categories: null,
        }
    },
    components: {
        // sixerrHeader,
        sixerrHero,
        mainInfo,
        carouselCategory,
        trustedBy,
    },
    created() {
        // console.log(gigService.getCategories())
        // this.$store.dispatch({ type: loadCategories })

        this.categories = this.$store.getters.categoriesToShow
    },
    methods: {
        async get() {
            const res = await gigService.query()
        },
    },
    computed: {
        categories() {
            // return this.$store.getters.getCategories
            // var test = this.$store.getters.getCategories
            // console.log(test)
        },

        getCategories() {
            console.log(this.categories)
            return this.categories
        },
    },
    unmounted() {},
}
</script>
