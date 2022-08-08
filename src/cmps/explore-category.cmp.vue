<template>
  <div class="ex-titele-category">
    <h2>{{ getCategory }}</h2>
    <p>Find the perfect freelance services for your business</p>
  </div>
</template>

<script>
export default {
  props: [""],
  data() {
    return {
      category: null,
    };
  },
  created() {
    const { category, price } = this.$route.query;
    const filterBy = { category };
    this.stringCategory(filterBy);
    this.setCategory(filterBy);
  },
  methods: {
    stringCategory({ category }) {
      if (!category) this.category = "All Categories";
      else this.category = category;
    },
    setCategory(filterBy) {
      this.$emit("setCategory", filterBy);
    },
  },
  computed: {
    getCategory() {
      return this.category;
    },
  },
  unmounted() {},
};
</script>
