<template>
  <nav class="nav">
		<ul class="nav__menu-container">
			<li class="nav__menu-list">
				<router-link
					class="nav__menu-anchor"
					to="./past-trials">
						Past of trials
				</router-link>
			</li>
      <li class="nav__menu-list">
				<router-link
					class="nav__menu-anchor"
					to="./how-it-works">
						How it works
				</router-link>
      </li>
			<li class="nav__menu-list">
				<router-link
					class="nav__menu-anchor"
					to="./log-in">
					Log in/ Sign Up
				</router-link>
      </li>
			<li class="nav__menu-list">
				<button class="nav__search">
          <svg class="search-icon"><use xlink:href="#ico-search"></use></svg>
				</button>
      </li>
		</ul>
	</nav>
</template>

<script>
  import Vue from 'vue';
  import Navigation from './navigation.vue';

  export default {
    name: 'navigation',
    components: {
      'navigation': Navigation
    }
  }
</script>
