<template>
  <div class="activityWarning">
    <div class="h4 mb-5">〔 活動告示 〕</div>
    <ul class="list-group">
      <li
        class="list-group-item bg-warning border-0 container py-4 mb-3"
        style="--bs-bg-opacity: 0.3"
        v-for="(event, index) of events"
        :key="event.ID"
      >
        <div class="row align-items-center g-3">
          <div class="col-5 col-xl-3 fs-4 fw-bold">
            {{
              new Date(event.StartTime).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })
            }}
          </div>
          <div class="col-7 col-xl-3">
            <span
              :class="[
                'text-white btn-sm rounded-1 px-5 py-2 activityWarning-alert',
                index % 3 === 0 ? 'bg-danger' : '',
                index % 3 === 1 ? 'bg-info' : '',
                index % 3 === 2 ? 'bg-warning' : '',
              ]"
              >疫情說明</span
            >
          </div>
          <div class="col-12 col-xl-6 text-start px-3">
            <div>{{ event.Name }}</div>
            <p class="text-break mt-2">
              {{ event.Description.substring(1, 50) }}...
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="d-grid gap-2 col-12 col-xl-4 mx-auto mt-4">
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

export default {
  components: {},
  setup() {
    const store = useStore();
    store.dispatch('getCancelActivities');
    const events = computed(() => store.state.cancelActivities);

    return {
      events,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';

.activityWarning {
  &-alert {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 10%;
      left: 0;
      width: 3px;
      height: 80%;
      background: linear-gradient(
        to bottom,
        $warning 0%,
        $warning 50%,
        $danger 50%,
        $danger 70%,
        $success 70%,
        $success 90%,
        $info 90%,
        $info 100%
      );
    }
  }
}
</style>
