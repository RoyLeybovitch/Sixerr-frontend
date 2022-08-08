<template>
    <div class="carousel">
        <vueper-slides
            ref="vueperslides1"
            :touchable="false"
            fade
            :autoplay="false"
            :bullets="false"
            @slide="
                $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                    emit: false,
                })
            "
            fixed-height="400px"
        >
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"
            >
            </vueper-slide>
        </vueper-slides>
        <div class="thumbnails">
            <vueper-slides
                class="no-shadow thumbnails"
                ref="vueperslides2"
                @slide="
                    $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                        emit: false,
                    })
                "
                :visible-slides="slides.length"
                fixed-height="75px"
                :bullets="false"
                :touchable="false"
                :gap="2.5"
                :arrows="false"
            >
                <vueper-slide
                    v-for="(slide, i) in slides"
                    :key="i"
                    :image="slide.image"
                    @click.native="$refs.vueperslides2.goToSlide(i)"
                >
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>
<script>
import { VueperSlide, VueperSlides } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    props: ["images"],
    data() {
        return {
            slides: [
                // {
                //     image: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
                // },
                // {
                //     image: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
                // },
                // {
                //     image: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
                // },
            ],
        };
    },
    created() {
        console.log(this.images)
        this.slides = this.images
         
    },
    computed: {
        
    },
    components: {
        VueperSlides,
        VueperSlide,
    },
};
</script>

<style>
.carousel {
  width: 100%;
    font-family: 'Macan-bold';
}

.vueperslides.vueperslide {
  height: 400px;   
}

.vueperslide.vueperslide:hover {
    transition: 0.5s;
    transform: scale(1.04);
}

.vueperslides__parallax-wrapper {
  height: 400px;
}

.vueperslides__arrow{
    opacity :1;
}

.vueperslides__arrow svg {
    background-color: #fff;

  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
  
  max-width: 16px;
  color: black;
  left: -24px;
  font-family: 'Macan-bold';
}
.vueperslide__content-wrapper {
    object-fit: contain;
}
.thumbnails {
  margin: auto;
  margin-top: 5px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.3;
  cursor: pointer;
}


.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}

.thumbnails {
  width: 100%;
}

.vueperslides {
  flex-direction: column;
  display: flex;
}

.vueperslides__arrows svg {
  max-width: 40px;
  max-height: 40px;
  font-weight: bold;
}
.vueperslides__arrow {
  max-width: 40px;
}

.vueperslides__arrow--next {
  right: -13px;
}
.vueperslides__arrow--prev {
  top: 200px;
}
</style>
