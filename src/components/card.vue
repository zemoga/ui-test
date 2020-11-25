<template>
  <li class="card"> 
    <div class="card__container grid">
      <div class="card__flag"><img src="../assets/img/ok-icon.png"/></div>
      <div class="card__masthead">
        <h4 class="card__title">Kanye West</h4>
        <p class="card__time">1 month ago</p>
        <p class="card__body">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
      </div>

      <form class="card__vote-form">
        <div class="card__vote-box card__vote-box--up">
          <input class="card__vote-input" type="radio" id="up" name="vote" value="up">
          <img src="../assets/img/ok-icon.png"/>
          <label class="sr-only" for="up">up</label>
        </div>
        <div class="card__vote-box card__vote-box--down">
          <input class="card__vote-input" type="radio" id="down" name="vote" value="down">
          <img src="../assets/img/ok-icon.png"/>
          <label class="sr-only" for="down">Down</label>
        </div>
        <button type="submit" class="card__vote-now cta-1">Vote now</button>
      </form>

      <ul class="card__vote-info">
        <li>
          <img src="../assets/img/ok-icon.png"/>
          <span class="card__percent">36%</span>
        </li>
        <li>
          <span class="card__percent">64%</span>
          <img src="../assets/img/ok-icon.png"/>
        </li>
      </ul>
    </div>
    <div class="card__cover-box">
      <img class="card__cover-img" src="../assets/img/west.jpg">
    </div>
  </li>
</template>

<script>
  export default {
    name: 'card'
  }
</script>