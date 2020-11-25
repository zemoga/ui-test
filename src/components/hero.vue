<template>
  <section class="hero">
    <div class="hero__wrapper grid">
      <div class="hero__card">
        <div class="hero__masthead">
          <h3 class="hero__eyebrow">What’s your opinion on</h3>
          <h4 class="hero__title">Pope Francis?</h4>
          <p class="hero__body">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </p>
          <a class="hero__anchor" href="/">More information</a>
          <span class="hero__note">What’s Your Verdict?</span>
        </div>

        <form class="hero__vote-form">
          <button type="submit" class="hero__vote-button hero__vote-button--up ok-icon">
            <img src="../assets/img/ok-icon.png"/>
          </button>
          <button type="submit" class="hero__vote-button hero__vote-button--down">
            <img src="../assets/img/ok-icon.png"/>
          </button>
        </form>
      </div>

      <div class="hero__closing">
        <span class="hero__closing-label">Closing In</span>
        <span class="hero__closing-deadline">22 <span>days</span></span>
      </div>
      <div class="hero__cover-box">
        <img class="hero__cover-img" src="../assets/img/papa.jpg">
      </div>
    </div> 
  </section>
</template>

<script>
  import Vue from 'vue';
  import Card from './card.vue';

  export default {
    name: 'hero'
  }
</script>+