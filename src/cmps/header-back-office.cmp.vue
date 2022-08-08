<template>
  <div class="header-back-office flex main-layout space-between">
    <h4 class="back-office-username">Hello {{ user.fullname }}</h4>
    <div class="switch-btn flex">
    <h4 :class="{ 'active-user': !isBuyer }" @click="switchBuyer">
      Switch to Seller
    </h4>
    <h4 :class="{ 'active-user': isBuyer }" @click="switchBuyer">
      Switch to Buyer
    </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      isBuyer: true,
    };
  },
  created() {},
  methods: {
    switchBuyer() {
      this.isBuyer = !this.isBuyer;

      console.log("this.isBuyer", this.isBuyer);

      this.$emit("order", this.isBuyer);
    },
  },
  computed: {},
  unmounted() {},
};
</script>

<style lang="scss" scoped></style>
