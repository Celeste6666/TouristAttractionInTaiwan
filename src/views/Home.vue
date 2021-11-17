<template>
  <News class="my-5" />
  <Banner />
  <div class="container">
    <RandomTwoCity class="my-5" />
    <PopularAttraction class="my-5" />
    <Comment class="my-5" />
    <ActivityWarning class="my-5" />
    <Post class="my-5" />
  </div>
</template>

<script>
import News from '@/components/home/News';
import Banner from '@/components/home/Banner.vue';
import RandomTwoCity from '@/components/home/RandomTwoCity';
import PopularAttraction from '@/components/home/PopularAttraction';
import Comment from '@/components/home/Comment';
import ActivityWarning from '@/components/home/ActivityWarning';
import Post from '@/components/home/Post';

export default {
  name: 'Home',
  components: {
    News,
    Banner,
    RandomTwoCity,
    PopularAttraction,
    Comment,
    ActivityWarning,
    Post,
  },
};
</script>
