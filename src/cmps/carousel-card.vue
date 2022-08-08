<template>
    <div class="image-preview">
        <div class="block">
            <el-carousel trigger="click" :autoplay="false" height="184px">
                <el-carousel-item v-for="image in images" :key="image">
                    <img class="carousel-card" :src="image.image" alt="" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'carousel-gigpreview',
 props: ["images"],
      created() {
      },
    components: {},
    computed: {

    },
}
</script>