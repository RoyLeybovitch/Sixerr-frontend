<template>
  <el-select
    class="ex-filter-popular ex-btn"
    @change="time"
    placeholder="Delivery time"
  >
    <el-option value="1">Express 24H</el-option>
    <el-option value="3">Up to 3 days</el-option>
    <el-option value="7">Up to 7 days</el-option>
    <el-option value="">Clear All</el-option>
  </el-select>
</template>

<script>
export default {
 template: `
`,
data() {
return {};
},
created() {},
methods: {
      time(val) {
         const filter={
        time:val
      }
      this.$emit("time", filter);
    },
},
computed: {},
unmounted() {},
};
</script>
