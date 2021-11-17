<template>
  <div class="search container-md">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="text-dark text-decoration-none">首頁</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span class="border-bottom border-dark">人氣景點探索</span>
        </li>
      </ol>
    </nav>
    <h4>景點列表</h4>
    <h6>{{ location }}</h6>
    <div class="options">
      <div
        class="mt-4 d-flex flex-column flex-md-row justify-content-center align-items-center"
      >
        <div class="dropdown m-2 my-lg-0">
          <button
            class="btn btn-outline-danger border-1 dropdown-toggle px-5"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            地區
          </button>
          <ul
            class="dropdown-menu border-0"
            aria-labelledby="dropdownMenuButton1"
            @click.prevent="changeLocation"
          >
            <li
              class="text-center"
              v-for="country of countries"
              :key="country.value"
            >
              <a
                class="dropdown-item rounded w-75 mx-auto"
                href="#"
                :data-city="country.name"
                >{{ country.name }}</a
              >
            </li>
          </ul>
        </div>

        <div
          class="d-flex flex-wrap justify-content-center align-items-center"
          @click.prevent="changeType"
        >
          <div
            :class="[
              'btn border-1 m-2',
              searchType === 'ScenicSpot' ? 'btn-danger' : 'btn-outline-danger',
            ]"
            data-type="ScenicSpot"
          >
            熱門景點
          </div>
          <div
            :class="[
              'btn border-1 m-2',
              searchType === 'Activity' ? 'btn-danger' : 'btn-outline-danger',
            ]"
            data-type="Activity"
          >
            熱門活動
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div class="col" v-for="data of SearchData" :key="data.ID">
        <div class="card border-0">
          <router-link
            :to="{ name: 'Location', params: { id: data.ID } }"
            class="text-dark"
            style="height: 300px; width: 100%"
          >
            <img
              :src="data.Picture.PictureUrl1"
              :alt="data.Picture.PictureDescription1"
              class="rounded-3 w-100 h-100"
            />
            <span
              class="card-title position-absolute px-2 py-4 rounded-start text-nowrap h4"
              >{{ data.City.substring(0, 2) }}</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Search',
  setup() {
    const store = useStore();
    const countries = computed(() => store.state.country);
    const location = computed(() => store.state.search.city);
    store.dispatch('getSearchData');

    const SearchData = computed(() => store.state.search.data);

    // 修改地點
    const changeLocation = (e) => {
      store.commit('changeSearchCity', e.target.dataset.city);
      store.dispatch('getSearchData');
    };

    const searchType = computed(() => store.state.search.type);
    const changeType = (e) => {
      store.commit('changeSearchType', e.target.dataset.type);
      store.dispatch('getSearchData');
    };
    return {
      countries,
      SearchData,
      location,
      changeLocation,
      searchType,
      changeType,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';
.breadcrumb {
  --bs-breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
}

.dropdown-menu {
  transform: translate3d(0px, 50px, 0px) !important;
  box-shadow: 0px 4px 15px rgba(4, 18, 58, 0.15),
    0px 1px 5px rgba(4, 18, 58, 0.25) !important;
  li:hover {
    .dropdown-item {
      border: 1px solid $danger;
    }
  }
}
.card {
  &-title {
    writing-mode: vertical-lr;
    letter-spacing: 5px;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
