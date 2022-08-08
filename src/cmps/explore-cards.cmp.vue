<template>
  <ul class="explore-cards-conteiner">
    <li
      class="explore-card"
      v-for="gig in gigs"
      :key="gig._id"
      @click="loadGig(gig._id)"
    >
      <carusel-card class="img-gig" v-if="gig.images" :images="gig.images" />
      <!-- <img class="img-gig" v-if="gig.images" :src="gig.images[0].image" /> -->
      <div class="explore-grid-details">
        <img class="explore-img-owner" :src="gig.owner.imgUrl" />
        <h3 class="explore-card-name">{{ gig.owner.fullname }}</h3>
        <p class="explore-card-degree">Level {{ gig.owner.level }} Seller</p>
        <p class="explore-card-title hover-green">
          {{ getGigSlice(gig.title) }}
          <!-- {{ gig.title.split(" ").slice(0, 7).join(" ") }}... -->
        </p>
        <p class="explore-card-rate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            width="15"
            height="15"
          >
            <path
              fill="currentColor"
              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
            ></path>
          </svg>
          {{ getRate(gig.owner.rate) }}<span>{{ getRandomInt(400, 800) }}</span>
        </p>
        <svg
          class="explore-card-like"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"
          ></path>
        </svg>
        <p class="explore-card-price">
          <span> STARTING AT</span><br />
          ${{ gig.price }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import caruselCard from "../cmps/carousel-card.vue";
export default {
  props: ["gigs"],
  data() {
    return {
      num: 100,
    };
  },
  created() {},
  components: {
    caruselCard,
  },
  methods: {
    loadGig(id) {
      this.$router.push("/gig/" + id);
    },
    randomInt(min = 400, max = 900) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    //min- in, max-out
    getRate(rate) {
      if (rate === 5) return "5.0";
      return rate;
    },
    getRandomInt() {
      const num = this.randomInt();
      return " (" + num + ")";
    },
    getGigSlice(title) {
      console.log(title);
      if (title.length > 60) {
        title = title.slice(0, 60) + "...";
      }
      return title
    },
  },
  computed: {},
  unmounted() {},
};
</script>
