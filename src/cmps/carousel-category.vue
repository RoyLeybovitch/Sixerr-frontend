<template>
    <section class="categories-container">
        <h2 class="category-title">Popular professional services</h2>
        <vueper-slides
            class="no-shadow"
            fixed-height="345px"
            :visible-slides="5"
            slide-multiple
            :gap="3"
            :bullet="false"
            :slide-ratio="1 / 4"
            :dragging-distance="200"
            :breakpoints="{
                1240: { visibleSlides: 4, slideMultiple: 4 },
                1060: { visibleSlides: 3, slideMultiple: 3 },
                800: { visibleSlides: 2, slideMultiple: 2 },
                600: { visibleSlides: 1, slideMultiple: 1 },
            }"
        >
            <vueper-slide v-for="category in categories" :key="category.name" :image="category.img">
                <template #content>
                    <li class="category-preview-box" @click="explore(category.name)">
                        <div class="category-txt-name-box">
                            <small class="category-txt">{{ category.txt }}</small>
                            <h4 class="category-name">{{ category.name }}</h4>
                        </div>
                    </li>
                </template>
            </vueper-slide>
        </vueper-slides>
        <!-- <Carousel :items-to-show="5" :wrap-around="true" v-if="categories">
            <Slide v-for="category in categories" :key="category.name">
                <li class="category-preview-box" @click="explore(category.name)">
                    <div class="category-txt-name-box">
                        <small class="category-txt">{{ category.txt }}</small>
                        <h4 class="category-name">{{ category.name }}</h4>
                    </div>
                    <img :src="category.img" alt="Cant load img right now" />
                </li>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel> -->
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { gigService } from '../services/gig-service'

export default defineComponent({
    name: 'wrap-around',
    props: ['categories'],

    computed: {
        // categoryImg() {
        //     return this.category.img
        // },
        getCategories() {
            console.log(this.categories)
            return this.categories
        },
    },
    methods: {
        explore(category) {
            const filterBy = {
                category,
            }
            const queryStringParams = `explore?category=${filterBy.category}`
            const newUrl = queryStringParams
            console.log(newUrl)
            this.$router.push(newUrl)
        },
    },
    created() {
        console.log(this.categories)
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        VueperSlides,
        VueperSlide,
    },
})
</script>
<style>
.vueperslide.vueperslide--visible {
    border-radius: 4px;
    /* .vueperslide.vueperslide--visible{
    border-radius:4px;
    
}

.vueperslide.vueperslide--visible:hover {
    transition: none;
    transform: unset !important;

    opacity: 0.85;
}

.vueperslides--fixed-height.vueperslides--bullets-outside {
    /* width: 1215px; */
}
.vueperslides__bullets--outside {
    display: none;
    position: relative;
}

.vueperslides__arrows svg {
    position: absolute;
    stroke-width: 1;
}
.vueperslides__arrows--outside .vueperslides__arrow--prev {
    left: 0.2em;
    transform: translateY(-28px);
}
.vueperslides__arrows--outside .vueperslides__arrow--next {
    right: -1.2em;
}

.categories-container .vueperslides__arrow svg {
    max-height: 52px !important;
    stroke-width: 2.5px;
    padding: 1em;
    max-width: 3.5em !important;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
    color: black;
    transform: translate(-10px, -28px);
    font-family: 'Macan-bold';
    stroke: #6f6f6f;
}
</style>

<!-- .vueperslides--fixed-height.vueperslides--bullets-outside{
    width: 1215px;
} */ -->
<!-- </style> -->
