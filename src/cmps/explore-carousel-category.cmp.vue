<template>
  <div class="ex-carusel-main">
    <carousel
      :items-to-show="getCountIcon"
      :items-to-scroll="getCountScroll"
      transition="600"
    >
      <slide v-for="category in getCategories" :key="category.name">
        <div
          class="explore-category-carusel"
          @click="loadCategory(category.name)"
        >
          <img :src="getImgUrl(category.icon)" />
          <h5>{{ category.name }}</h5>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  props: ["categories"],
  data() {
    return {
      width: null,
      countIcon: null,
      countScroll: 1.3,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  created() {
    console.log(this.categories);
    window.addEventListener("resize", this.updateScroll);
    this.updateScroll();
    // document.body.addEventListener("click", this.closeProfilePopover);
  },
  computed: {
    getCategories() {
      return this.categories;
    },
    getCountIcon() {
      return this.countIcon;
    },
    getCountScroll() {
      return this.countScroll;
    },
  },
  methods: {
        getImgUrl(file){
      const imgUrl = new URL(`../assets/icon/${file}`,import.meta.url)
      return  imgUrl
    },
    updateScroll() {
      if (window.innerWidth > 1200) {
        this.countIcon = 7;
      } else if (window.innerWidth > 1000) {
        this.countIcon = 6;
      } else if (window.innerWidth > 800) {
        this.countIcon = 4;
        this.countScroll = 1;
      } else if (window.innerWidth > 600) {
        this.countIcon = 3;
      } else if (window.innerWidth > 400) {
        this.countIcon = 2;
           } else if (window.innerWidth < 400) {
        this.countIcon = 1;
      }
    },
    loadCategory(category) {
      this.categoryParams(category);
      const filterBy = { category };
      this.$emit("setCategory", filterBy);
    },
    categoryParams(category) {
      const filterBy = {
        category,
      };
      const queryStringParams = `explore?category=${filterBy.category}`;
      const newUrl = queryStringParams;
      console.log(newUrl);
      this.$router.push(newUrl);
    },
  },
};
</script>
