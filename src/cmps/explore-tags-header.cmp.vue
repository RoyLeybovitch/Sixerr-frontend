<template>

  <div class="category-conteiner">
    <ul class="ex-header main-layout">
      <li  v-for="tag in tags" :key="tag" @click="tagFilter(tag)">{{ tag }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  
  props: ["tags"],
  data() {
    return {};
  },
  created() {},
  methods: {
    tagFilter(tag) {
      const filterBy = { tag };
      this.$emit("setTag", filterBy);
    },
  },
  computed: {},
  unmounted() {},
};
</script>
