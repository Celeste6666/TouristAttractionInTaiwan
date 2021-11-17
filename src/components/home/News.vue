<template>
  <swiper slidesPerView="auto" :spaceBetween="20" class="myNewsSwiper">
    <swiper-slide v-for="slide of slides" :key="slide.ID">
      <button type="button" class="btn btn-danger text-nowrap">
        <i class="bi bi-exclamation-triangle-fill fs-5 pe-2"></i>
        {{ slide.Name }}
      </button>
    </swiper-slide>
  </swiper>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    store.dispatch('getCancelActivities');
    const slides = computed(() => store.state.cancelActivities);

    return {
      slides,
    };
  },
};
</script>
<style scoped>
.swiper-slide {
  width: auto; /*根据内容调整宽度*/
}
</style>
