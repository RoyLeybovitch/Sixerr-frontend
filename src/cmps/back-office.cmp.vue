<template>
  <section class="orders-back-office">
  <header-back-office
    class="header-back-office-conteiner"
    v-if="user"
    :user="user"
    @order="loadUserOrders"
  />
  <!-- <data-entry /> -->
  <div class="orders-back-office main-layout">
        <div class="categories-container-backoffice">
        <div>owner image</div>
        <div>seller name</div>
        <div>Price</div>
        <div>Time for delivery</div>
    </div>
    <ul v-if="orders" class="ul-back-office clean-list main-layout">
      <order-back-office
        class="render-ul-back-office"
        v-for="order in getOrders"
        :order="order"
      />
    </ul>
  </div>
     </section>
</template>

<script>
import dataEntry from "./data-entry.cmp.vue";
import aboutBuyer from "../cmps/about-buyer.cmp.vue";
import orderBackOffice from "../cmps/order-back-office.cmp.vue";
import headerBackOffice from "./header-back-office.cmp.vue";
export default {
  data() {
    return {
      orders: null,
      gigs: null,
      user: null,
      isBuyer: true,
    };
  },
  async created() {
    this.user = this.$store.getters.getUser;
    if (!this.user) this.$router.push("/explore");
    else await this.loadUserOrders();
  },
  computed: {
    getOrders() {
      console.log("this.orders", this.orders);

      return this.orders;
    },
    async created() {
      this.user = this.$store.getters.getUser;
      if (!this.user) this.$router.push("/explore");
      else await this.loadUserOrders();
    },
  },
  methods: {
    async loadUserOrders(isBuyer = true) {
      var userId = this.user._id;
      const filterBy = {
        userId,
        isBuyer,
      };
      console.log("filterBy", filterBy);

      this.orders = await this.$store.dispatch({
        type: "getOrdersById",
        filterBy,
      });
      this.orders = this.$store.getters.getorders;
    },
  },

  components: {
    aboutBuyer,
    orderBackOffice,
    headerBackOffice,
    dataEntry,
  },
};
</script>
