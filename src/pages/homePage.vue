<template>
  <div>
    <hero></hero>
    <banner></banner>
    <card-list></card-list>
    <banner-submit></banner-submit>
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Hero from '../components/hero.vue';
  import Banner from '../components/banner.vue';
  import BannerSubmit from '../components/bannerSubmit.vue';
  import CardList from '../components/cardList.vue';

  export default {
    name: 'home-page',
    components: {
      'hero': Hero,
      'banner': Banner,
      'banner-submit': BannerSubmit,
      'card-list': CardList,
    }
  }
</script>
