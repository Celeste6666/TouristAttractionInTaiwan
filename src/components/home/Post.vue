<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5">
        <div class="card border-0 bg-warning p-4">
          <div class="card-body">
            <p class="card-title h4 fw-bold mb-5">募集</p>
            <span class="h5 card-subtitle fw-bold">歡迎投稿 讓台灣更美好</span>
            <p class="my-4 text-start">
              號召熱愛台灣的旅遊人，需要你們熱情投稿來創造台灣旅遊勝地。台灣有許多未被發現美好景點，不管是鄉村、網美以及廟宇的景點等等，都需要你們一起分享！
            </p>
            <div class="d-grid gap-2 col-12 mx-auto">
              <button class="btn btn-success btn py-2">
                <span class="px-3">了解更多詳情</span>
                <i class="bi bi-arrow-right fw-bold"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/scss/main.scss';

.card-subtitle {
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 20px;
    background: $danger;
    border-radius: 25px;
    border: 1px solid $danger;
  }
}
</style>
