<template>
  <section class="budget-filter-container">
    <el-select
      class="ex-price ex-btn"
      @select="filterPrice"
      placeholder="Budget"
      :class="{ 'full-filter': min > 0 || max > 0 }"
    >
      <el-option
        @click="show = true"
        :style="show ? { visibility: hidden } : null"
        hidden
      ></el-option>
      <section class="budget-filter-container">
        <div class="inps-min-max">
          <div class="input-min">
            <h5>MIN.</h5>
            <el-input
              v-model="min"
              @change="filterPrice"
              class="flex w-50 m-2"
              placeholder="Any"
              :prefix-icon="Search"
            />
          </div>
          <div class="input-max">
            <h5>MAX.</h5>
            <el-input
              class="flex w-50 m-2"
              placeholder="Any"
              v-model="max"
              @change="filterPrice"
              :prefix-icon="Search"
              width="40px"
            />
          </div>
        </div>
      </section>
      <div class="price-btn-ex flex justify-between">
        <p class="price-clear" @click="clear">Clear All</p>
        <el-button class="price-aplly" type="success" @click="filterPrice"
          >Apply</el-button
        >
      </div>
    </el-select>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show: null,
      min: null,
      max: null,
    };
  },
  created() {},
  methods: {
    filterPrice() {
      this.show = true;
      const filter = {
        min: this.min,
        max: this.max,
      };
      this.$emit("price", filter);
    },
    clear() {
      this.min = null;
      this.max = null;
      filterPrice();
    },
  },
  computed: {},
  unmounted() {},
};
</script>

<style>
.budget-filter-container {
  display: flex;
  flex-direction: column;
}
.inps-min-max {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default {
  height: 160px;
}
.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default {
  overflow-y: hidden;
}
</style>
