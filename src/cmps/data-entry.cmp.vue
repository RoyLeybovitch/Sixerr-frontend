<template>
  <div class="flex main-layout space-between">
    <chart-f />
    <chart-s />
    <chart-t />
  </div>
</template>

<script>
import chartF from "./chart-f.cmp.vue";
import chartS from "./chart-s.cmp.vue";
import chartT from "./chart-t.cmp.vue";
export default {
  props: ["isBuyer"],
  data() {
    return {};
  },
  components: {
    chartF,
    chartS,
    chartT,
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
};
</script>

<style lang="scss" scoped></style>
