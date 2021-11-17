<template>
  <nav class="navbar navbar-light bg-warning py-4 mb-4">
    <div
      class="container-fluid flex-column justify-content-center flex-lg-row justify-content-lg-between"
    >
      <a class="navbar-brand h1 fw-bold" href="#"
        ><span class="text-logo">Taiwan</span>
        <span class="text-white"> GO</span></a
      >
      <div class="w-auto input-group mx-auto">
        <input
          v-model="searchLocation"
          type="text"
          class="form-control rounded-end rounded-pill border-end border-danger"
          placeholder="你想去哪裡？"
          aria-label="你想去哪裡？"
        />
        <button
          class="btn btn-white text-danger dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          熱門景點
        </button>
        <ul class="dropdown-menu dropdown-menu-end" @click.prevent="changeType">
          <li>
            <a class="dropdown-item" href="#" data-type="ScenicSpot"
              >熱門景點</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#" data-type="Activity">熱門活動</a>
          </li>
        </ul>
        <button
          class="btn btn-success rounded-start rounded-pill"
          type="button"
          @click.prevent="toSearch"
        >
          <i class="bi bi-geo-alt fs-5 px-3 fw-bolder"></i>
        </button>
      </div>
    </div>
  </nav>
  <router-view />
  <footer class="mt-5 bg-warning container-fluid p-4">
    <div class="row">
      <div class="col-12 small fw-bold d-flex flex-row justify-content-center">
        <ul class="list-unstyled mx-md-4 mx-2">
          <li class="my-4">
            <a href="#" class="text-decoration-none text-dark"
              >關於 Taiwan GO</a
            >
          </li>
        </ul>
        <ul class="list-unstyled mx-md-4 mx-2">
          <li class="my-4">
            <a href="#" class="text-decoration-none text-dark">投稿說明</a>
          </li>
          <li class="my-4">
            <a href="#" class="text-decoration-none text-dark">版權所有</a>
          </li>
        </ul>
        <ul class="list-unstyled mx-md-4 mx-2">
          <li class="my-4">
            <a href="#" class="text-decoration-none text-dark">最新消息</a>
          </li>
          <li class="my-4">
            <a href="#" class="text-decoration-none text-dark">展覽資訊</a>
          </li>
          <li class="my-4">
            <a href="#" class="text-decoration-none text-dark">景點告示</a>
          </li>
        </ul>
        <ul class="list-unstyled mx-md-4 mx-2">
          <li class="my-4">
            <a href="#" class="text-decoration-none text-dark">友善旅遊</a>
          </li>
        </ul>
        <ul class="list-unstyled mx-4">
          <li class="my-4">
            <a href="#" class="text-decoration-none text-dark">活動行事曆</a>
          </li>
        </ul>
      </div>
      <div class="col-6 offset-md-2 text-start">
        <a class="h2 text-decoration-none fw-bold" href="#"
          ><span class="text-logo">Taiwan</span>
          <span class="text-white"> GO</span></a
        >
      </div>
    </div>
  </footer>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const router = useRouter();
    const store = useStore();
    const searchLocation = computed({
      get() {
        return store.state.search.city;
      },
      set(newVal) {
        store.commit('changeSearchCity', newVal);
      },
    });

    const searchType = computed(() => store.state.search.type);
    const changeType = (e) => {
      store.commit('changeSearchType', e.target.dataset.type);
    };

    const toSearch = () => {
      store.dispatch('getSearchData');
      router.push('/search');
    };

    return {
      searchLocation,
      searchType,
      changeType,
      toSearch,
    };
  },
};
</script>
<style lang="scss">
:root {
  --bs-body-color: #363633;
}
#app {
  text-align: center;
}
.text-logo {
  color: #000095;
}
</style>
