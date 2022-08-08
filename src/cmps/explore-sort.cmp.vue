<template>
  <div class="flex align-center">
    <p>Sort By</p>
    <el-select class="ex-sort ex-btn"  v-model="value" @change="sortBy">
      <el-option value="title">Title</el-option>
      <el-option value="price">Price </el-option>
      <el-option value="name">Name </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:"Name"
    };
  },
  created() {},
  methods: {
    sortBy(val) {
      const sortBy = val;
      this.$emit("sortBy", sortBy);
    },
  },
  computed: {},
  unmounted() {},
};
</script>
