<template>
  <div id="app">
    <header-view></header-view>
    <main>
      <router-view></router-view>
    </main>
    <footer-view></footer-view>
    <icons></icons>
  </div>
</template>

<script>
  import HeaderView from './components/common/headerView.vue';
  import FooterView from './components/common/footerView.vue';
  import Icons from './components/partials/icons.vue';

  export default {
    name: 'App',
    components: {
      'header-view': HeaderView,
      'footer-view': FooterView,
      'icons': Icons
    }
  }
</script>