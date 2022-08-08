<template>
  <div class="hero-section">
    <div class="hero-img">
      <div
        :style="{ backgroundImage: `url(${images[imgIdx]})` }"
        class="hero-img-box"
      ></div>
      <!-- <img class="hero-img1 animation-hero" :src="image" alt="" /> -->

      <!-- <img class="hero-img2 animation-hero" :src="image1" alt="" /> -->
    </div>
    <div class="hero-box">
      <div class="hero-container main-layout flex space-between">
        <div class="hero-content">
          <h1>
            Find the perfect
            <span class="freelance">freelance</span>
            <br />
            services for your business
          </h1>

          <gig-filter @setFilter="setFilter" />

          <div class="popular-categories">
            <p>Popular:</p>
            <span>
              <a @click="explore('Website Design')">Website Design</a>
            </span>
            <span>
              <a @click="explore('WordPress')">WordPress</a>
            </span>
            <span>
              <a @click="explore('Logo Design')">Logo Design</a>
            </span>
            <span>
              <a @click="explore('NFT Art')">NFT Art</a>
            </span>
          </div>
        </div>
        <div class="seller-star-name-box">
          <div class="seller-star-name">
            <p class="stars-hero">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                />
              </svg>
            </p>
            <p class="seller-name-hero">{{ sellerName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gigFilter from "./gig-filter.cmp.vue";
import trustedBy from "./trusted-by.cmp.vue";
export default {
  components: {
    gigFilter,
    trustedBy,
  },
  data() {
    return {
      images: [
        this.getImgUrl("hero1.png"),
        this.getImgUrl("hero2.png"),
        this.getImgUrl("hero3.png"),
        this.getImgUrl("hero4.png"),
      ],
      imgIdx: 0,

      image: "src/img/hero1.png",

      sellerNames: [
        "Emma, Full Stack Developer",
        "Alice, Product Manager",
        "David, Data Analyst",
        "John, Economist",
      ],
      sellerName: "Emma, Full Stack Developer",
    };
  },
  methods: {
    setImage() {
      var i = 0;
      const that = this;
      setInterval(function () {
        that.image = that.image[i];
        i = i + 1;
        if (i === that.images.length) {
          i = 0;
        }
      }, 5000);
    },
    setFilter(filterBy) {
      this.$store.dispatch({ type: "setFilter", filterBy });
      this.$router.push("/explore");
    },
    getImgUrl(file){
      const imgUrl = new URL(`../img/${file}`,import.meta.url)
      return  imgUrl
    },

    setSellerName() {
      var i = 0;
      const that = this;
      setInterval(function () {
        that.sellerName = that.sellerNames[i];
        i = i + 1;
        if (i === that.sellerNames.length) {
          i = 0;
        }
      }, 5000);
    },
    explore(category) {
      const filterBy = {
        category,
      };
      const queryStringParams = `explore?category=${filterBy.category}`;
      const newUrl = queryStringParams;
      console.log(newUrl);
      this.$router.push(newUrl);
    },
  },
  created() {
    // this.setImage()
    this.setSellerName();
  },
  mounted() {
    setInterval(() => {
      this.imgIdx++;
      if (this.images.length <= this.imgIdx) {
        this.imgIdx = 0;
      }
    }, 5000);
  },
};
</script>

<style></style>
