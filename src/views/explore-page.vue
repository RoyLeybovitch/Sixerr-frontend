<template>
  <!-- <div v-if="getGigs"> -->
  <div>
    <explore-tags @setTag="setCategory" :tags="tags" />
    <div class="conteiner-explore main-layout">
      <explore-category @setCategory="setCategory" :res="getCategory" />
      <explore-carousel-category
        :categories="getCategories"
        @setCategory="setCategory"
      />
      <explore-filters v-if="gigs" :gigs="getGigs" />
      <explore-cards v-if="gigs" :gigs="getGigs" />
      <img v-else class="explore-loading" src="../assets/gif/spinner.gif" alt="" />
    </div>
  </div>
  <div></div>
</template>

<script>
import exploreTags from "../cmps/explore-tags-header.cmp.vue";
import exploreCarouselCategory from "../cmps/explore-carousel-category.cmp.vue";
import exploreCategory from "../cmps/explore-category.cmp.vue";
import exploreFilters from "../cmps/explore-filters.cmp.vue";
import exploreCards from "../cmps/explore-cards.cmp.vue";
export default {
  data() {
    return {
      // isGigs: null,
      gigs: null,
      category: null,
      // filter: {},
      tags: [
        "Lading Page",
        "Minimal Logo",
        "Voice Active",
        "2D Animation",
        "Marketing Video",
        "Instagram",
      ],
      res: "All Categories",
    };
  },
  components: {
    exploreTags,
    exploreCategory,
    exploreFilters,
    exploreCards,
    exploreCarouselCategory,
  },
  async created() {
    try {
      this.category = this.$store.getters.categoriesToShow;
      this.$store.commit({
        type: "setCategory",
        category: JSON.parse(JSON.stringify(category)),
      });
      // console.log(this.categories);
      await this.$store.dispatch({
        type: "loadGigs",
      });
    } catch (error) {}
  },
  // methods: {
  //   getFilterGigs() {
  //     var gigs = this.gigs;
  //     const filter = this.$store.getters.setFilterEx;
  //     return gigs;
  //   },
  // },

  methods: {
    async setCategory(filterBy) {
      try {
        this.$store.commit({
          type: "setCategory",
          category: JSON.parse(JSON.stringify(filterBy)),
        });
        await this.$store.dispatch({ type: "loadGigs", filterBy });
        this.gigs = this.$store.getters.gigsToShow;
      } catch (error) {
        console.log("error explore", error);
      }
    },
  },
  computed: {
    getTags() {
      return this.tags;
    },
    getCategories() {
      const categories = this.$store.getters.categoriesToShow;
      return categories;
    },
    // getCategory(filter) {
    //   console.log(filter);
    // },
    getGigs() {
      const gigs = this.$store.getters.gigsToShow;
      // this.isGigs = true;
      // console.log(this.isGigs);
      // const filterEx = this.$store.getters.getFilterEx;
      this.gigs = gigs;
      if (!gigs) return;

      return gigs;
    },
  },
  unmounted() {},
};
</script>
