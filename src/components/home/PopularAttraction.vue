<template>
  <div class="PopularAttraction">
    <div
      class="title d-flex justify-content-between align-items-center position-relative"
    >
      <span class="h4 text-start">人氣景點探索</span>
      <span class="position-absolute navigation">
        <button
          class="btn btn-success rounded-circle navigation-button-prev text-center align-middle disabled"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <span class="px-4">1/4</span>
        <button class="btn btn-success rounded-circle navigation-button-next">
          <i class="bi bi-chevron-right"></i>
        </button>
      </span>
    </div>

    <swiper
      :breakpoints="{
        '375': {
          slidesPerView: 1.6,
          spaceBetween: 15,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 35,
        },
      }"
      :loop="true"
      ref="attractionSwiper"
      class="mySwiper my-5"
    >
      <swiper-slide
        class="position-relative"
        v-for="(slide, index) of slides"
        :key="slide.ID"
        :data-id="slide.ID"
      >
        <router-link :to="{ name: 'Location', params: { id: slide.ID } }">
          <img
            class="rounded-3 img-fluid"
            :src="slide.Picture.PictureUrl1"
            :alt="slide.Picture.PictureDescription1"
          />
          <span
            class="swiper-slide-title position-absolute px-2 py-4 rounded-start text-nowrap h4 text-dark"
            >{{ slide.City.substring(0, 2) }}</span
          >
        </router-link>
        <p class="my-3 fw-lighter">{{ slide.Name }}</p>
      </swiper-slide>
    </swiper>

    <div class="d-grid gap-2 col-12 col-md-4 mx-auto">
      <button class="btn btn-success btn py-2">
        <span class="px-3">了解更多詳情</span>
        <i class="bi bi-arrow-right fw-bold"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  EffectCoverflow,
  Navigation,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, EffectCoverflow, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    store.dispatch('getCountryTopRecommand');
    const slides = computed(() => store.state.countryTopRecommand);

    return {
      slides,
    };
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  right: 0;
}

.swiper-slide {
  img {
    height: 230px;
  }
  &-title {
    writing-mode: vertical-lr;
    letter-spacing: 5px;
    right: 0;
    top: 50%;
    transform: translate(0, -75%);
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
