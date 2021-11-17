<template>
  <div class="banner">
    <swiper
      class="myBannerSwiper"
      :loop="true"
      :slidesPerView="1.2"
      :spaceBetween="20"
      :centeredSlides="true"
      :observer="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 100000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide v-for="slide of slides" :key="slide.location">
        <a href="#">
          <img
            class="rounded-3 img-fluid"
            :src="slide.picture"
            :alt="slide.pictureDescription"
          />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { reactive } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = reactive([
      {
        location: 'Kaohsiung',
        picture: './assets/home/banner2.png',
        pictureDescription: '駁二特區',
      },
      {
        location: 'Tainan',
        picture: './assets/home/banner3.png',
        pictureDescription: '台南奇美博物館',
      },
      {
        location: 'TaitungCounty',
        picture: './assets/home/banner1.png',
        pictureDescription: '110年夜訪小野柳環教課程活動',
      },
    ]);
    return {
      slides,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';

#mySwiper {
  position: absolute;
  top: 20px;
}

.swiper-container {
  padding: 0 0 4rem 0;
}

/* /deep/ 是sass樣式穿透，可以直接覆蓋過第三方套件的樣式 */
/deep/ .swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  &-active {
    background-color: $warning;
  }
}
</style>
