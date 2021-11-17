<template>
  <div class="comments py-5">
    <div class="position-relative mb-5">
      <span class="h4">〔 投稿專區 〕</span>
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
        '320': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }"
      :loop="true"
      class="mySwiper mb-5"
    >
      <swiper-slide v-for="comment of comments" :key="comment.id">
        <img class="rounded-3 img-fluid" :src="comment.picture" alt="" />
        <div class="border border-danger text-start my-4 p-3 rounded-2">
          <p class="h5 text-truncate fw-bold">
            <span class="h4 pe-3">Q</span>{{ comment.title }}
          </p>
          <p class="text-truncate">{{ comment.content }}</p>
          <div class="text-end">
            <button class="btn text-danger p-0">
              <i class="bi bi-arrow-right-circle h3"></i>
            </button>
          </div>
        </div>
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
  data() {
    return {
      comments: [
        {
          id: 1,
          title: '關於墾丁回憶',
          content: '人與景點猶如夏天般的炙熱，是我所熟悉墾丁。',
          picture: './assets/home/nathaniel-yeo-X7TmA-H8dbs-unsplash.jpg',
        },
        {
          id: 2,
          title: '對於台北巷弄早午餐？',
          content:
            '台北的巷弄藏著不同風格早午餐，是我每次來到台北的動力，穿越過蜿蜒小弄裡，鋪陳的洗石子地磚讓我們緩慢了腳步，時間，在這裡似乎也躡起了腳尖輕聲慢走。',
          picture: './assets/home/joyce-romero-okhOnEMWkVU-unsplash.jpg',
        },
        {
          id: 3,
          title: '廟的文化',
          content:
            '每當去不同的地方，就一定要到附近的廟宇感受不同的背景時空及信仰。',
          picture: './assets/home/charles-postiaux-TnUG2pWraPE-unsplash.jpg',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  right: 0;
}

img {
  width: 100%;
  height: 90vh;
  object-fit: cover;
  filter: sepia(0.4) contrast(1.3);
}
</style>
