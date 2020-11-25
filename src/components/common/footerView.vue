<template>
  <footer class="footer grid">
    <div class="footer__wrapper">
      <ul class="footer__menu-container">
        <li class="footer__menu-list">
          <a class="footer__menu-anchor" href="#">
            Terms and Conditions
          </a>
        </li>
        <li class="footer__menu-list">
          <a class="footer__menu-anchor" href="#">
            Privacy Policy
          </a>
        </li>
        <li class="footer__menu-list">
          <a class="footer__menu-anchor" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <ul class="footer__rss social-network">
        <li class="social-network__item">Follow us</li>
        <li class="social-network__item">
          <a href="/" target="_blank" rel="noopener" class="">
            <span class="sr-only">Twitter </span>
            <svg class="social-network__icon" aria-hidden="true">
              <use xlink:href="#social-twitter"></use>
            </svg>
          </a>
        </li>
        <li class="social-network__item">
          <a href="/" target="_blank" rel="noopener" class="">
            <span class="sr-only">Facebook </span>
            <svg class="social-network__icon" aria-hidden="true">
              <use xlink:href="#social-facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer-view'
  }
</script>