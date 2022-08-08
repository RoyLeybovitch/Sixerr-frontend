<template>
  <div class="ex-filter-conteiner">
    <explore-filter-popularity @populary="setFilter" />
    <explore-filter-price @price="setFilter" />
    <explore-filter-time @time="setFilter" />
    <explore-budget />
  </div>
  <div class="ex-btn count-gigs flex align-center space-between">
    <p>{{ gigs.length }} services available</p>
    <explore-sort @sortBy="setSortby" />
  </div>
</template>

<script>
import exploreBudget from "./explore-budget.cmp.vue";
import exploreSort from "./explore-sort.cmp.vue";
import exploreFilterTime from "./explore-filter-time.cmp.vue";
import exploreFilterPrice from "./explore-filter-price.cmp.vue";
import exploreFilterPopularity from "./explore-filter-popularity.cmp.vue";
export default {
  props: ["gigs"],
  data() {
    return {};
  },
  components: {
    exploreFilterPopularity,
    exploreFilterPrice,
    exploreFilterTime,
    exploreSort,
    exploreBudget,
  },
  created() {
    console.log(this.gigs);
  },
  methods: {
    async setFilter(filter) {
      this.$store.commit({
        type: "setFilterBy",
        filterBy: JSON.parse(JSON.stringify(filter)),
      });
      // this.$store.dispatch({ type: "setFilterExp", filter });
      await this.$store.dispatch({ type: "loadGigs" });
    },
    async setSortby(sort) {
      this.$store.commit({
        type: "sortBy",
        filterBy: JSON.parse(JSON.stringify(sort)),
      });
      //  this.$store.dispatch({ type: "setSortEx", sort });
      await this.$store.dispatch({ type: "loadGigs" });
    },
  },
  computed: {},
  unmounted() {},
};
</script>
