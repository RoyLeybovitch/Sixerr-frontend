<template>
    <!--   
    <li class="li-back-office flex">
      <h5>Seller: Mosh</h5>
      <h5 class="">Price: $40.00</h5>
      <h5 class="">Time To Deliver:4 Days</h5>
      <h5>Message To Seller</h5>
    </li> -->

    <li class="li-back-office flex" v-if="order">
        <div class="wd-cell-bo">
            <img class="" :src="order.seller.imgUrl" alt="" />
        </div>
        <div class="flex wd-cell-bo">
            <h4>{{ order.seller.fullname }}</h4>
        </div>
        <div class="flex wd-cell-bo-price">
            <h5>${{ order.gig.price }}.00</h5>
        </div>
        <div class="flex wd-cell-bo">
            <h5>{{ order.timeToDeliver }} Days</h5>
        </div>
        <div class="flex align-center btn-bo">
            <h4
                class="pending-back-office"
                @click="pending(order)"
                :class="{ complete: status === 'Approved' }"
            >
                {{ getStatus }}
            </h4>
            <h4 class="msg-back-office">Message To Seller</h4>
        </div>
    </li>
    <!-- <li class="order-item flex">
      <section class="order-preview flex">
        <div class="main">
          <img class="bo-img-gig" :src="order.gig.images[0].image" alt="" />

          <div class="gig-info flex column">
            <span class="price">Price</span>
            <span class="_price">{{ order.gig.price }}.00$</span>
          </div>
          <div class="delivery-container flex column">
            <span class="delivery-time">Delivery Time</span>
            <span class="days">{{ order.timeToDeliver }} Days</span>
          </div>
          <div class="order-date flex column">
            <span class="title">Issued At</span>
            <span class="date">09:48 יולי 2022</span>
          </div>
          <div class="flex column">
            <img class="bo-img-seller" :src="order.seller.imgUrl" alt="" />
            <h5>{{ order.seller.fullname }}</h5>
          </div>
        </div>
        <div class="status-container">
          <span class="order-type">Order Status:</span>
          <span class="status gray">Pending</span>
        </div>
      </section>
    </li> -->
</template>

<script>
import { orderService } from "../services/order.service";
export default {
  props: ["order"],
  data() {
    return {
      isBuyer: null,
      status: null,
    };
  },
  created() {
    this.isBuyer = this.$store.getters.getIsBuyer;
    this.status = this.order.status;
   
  },
  methods: {
    async pending(order) {
      console.log(this.$store.getters.getIsBuyer);
      // if (!this.$store.getters.getIsBuyer) return
      // console.log(this.$store.getters.getIsBuyer);
      try {
        const currOrder = { ...order };
        
        currOrder.status = "Approved";
        console.log(currOrder);
        const res = await orderService.save(currOrder);
        console.log(res);
        this.status = res.status;
      } catch (error) {
        console.log(error);
      }
    },
      },
    computed: {
          getStatus() {
            console.log(this.status)
      return this.status;
    }
    },
    //created() {
    //     this.isBuyer = this.$store.getters.getIsBuyer;
    //     this.status = this.order.status;
    //     console.log(this.status);
    // },
    // methods: {
    //     async pending() {
    //         console.log(this.$store.getters.getIsBuyer);
    //         // if (!this.$store.getters.getIsBuyer) return
    //         // console.log(this.$store.getters.getIsBuyer);
    //         try {
    //             const res = await orderService.save(this.order);
    //             console.log(res);
    //             this.status = "Complete";
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },
    // },

  unmounted() {},
};
</script>

<style lang="scss" scoped></style>
