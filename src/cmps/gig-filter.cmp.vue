<template>
    <section class="gig-filter">
        <form @submit.prevent="test" class="search-section">
            <img src="../img/search.png" alt="" />
            <input @change="setFilter" v-model="filterBy.title" type="text" placeholder='Try "building mobile app"' class="search" />
            <button class="search-btn">Search</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                title: '',
                category: '',
            },
        }
    },
    methods: {
        setFilter() {
            this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)))
        },
        test() {
            console.log('testing submit')
        },
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories // Complete later
        },
    },
}
</script>
