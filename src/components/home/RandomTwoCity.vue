<template>
  <div class="RandomTwoCity py-3">
    <h4 class="fw-bold lh-lg mb-5">
      從台灣發現更多美好<br />
      兩大城市 教你拍起 EMO 圖！
    </h4>
    <div class="row">
      <div class="col-12 col-md-6" v-for="city of cities" :key="city.ID">
        <div class="card bg-warning border-0 mb-3 shadow">
          <img
            :src="city.Picture.PictureUrl1"
            class="card-img-top"
            :alt="city.Picture.PictureDescription1"
          />
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-4">
              2021 {{ city.City }}旅遊景點 一日遊
            </h5>
            <p class="card-text text-end">
              <button class="btn btn-sm bg-transparent text-secondary ps-2">
                一起了解，你從未發現{{ city.City }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Random',
  setup() {
    const store = useStore();
    const cities = computed(() => store.state.randomTwoCity);

    return {
      cities,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';

.card-text {
  button {
    position: relative;
    padding-right: 2.5rem;
    &::before,
    &::after {
      content: '';
      position: absolute;
      border: 2px solid $dark;
      border-radius: 40%;
    }
    &::before {
      bottom: 0;
      left: 0;
      width: 100%;
    }
    &::after {
      bottom: -3px;
      right: 9px;
      height: 100%;
      transform: rotate(-45deg);
    }
    &:hover {
      animation: moveRight 1.5s linear infinite alternate;
    }
  }
}
@keyframes moveRight {
  0% {
    padding-right: 2.5rem;
  }
  100% {
    padding-right: 2rem;
  }
}
</style>
