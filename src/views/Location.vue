<template>
  <div class="container">
    <h3 class="my-5">〔 {{ location.Name }} 〕</h3>
    <img
      :src="location.Picture.PictureUrl1"
      class="w-100 rounded-3"
      :alt="location.Picture.PictureDescription1"
    />
    <p class="mt-5 text-start py-4">
      {{ location.DescriptionDetail }}
    </p>
    <hr />
    <h4 class="mt-5 text-start">如何前往？</h4>
    <p class="text-start py-4 mb-5">{{ location.TravelInfo }}</p>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Location',
  setup() {
    const store = useStore();
    const router = useRouter();
    store.dispatch('getLocation', router.currentRoute.value.params.id);
    const location = computed(() => store.state.location);

    return {
      location,
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  max-height: 90vh;
}
</style>
