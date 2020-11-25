<template>
  <section class="card-list">
    <div class="card-list__wrapper grid">
      <h2 class="card-list__title">Votes</h2>
      <ul class="card-list__container">
        <card></card>
        <card></card>
        <card></card>
        <card></card>
      </ul>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import Card from './card.vue';

  export default {
    name: 'card-list',
    components: {
      'card': Card
    }
  }
</script>+