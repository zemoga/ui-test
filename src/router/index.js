import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/homePage.vue'
import PastTrialsPage from '../pages/PastTrialsPage.vue'
import HowItWorksPage from '../pages/HowItWorksPage.vue'
import LogInPage from '../pages/logInPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: HomePage
    },
    {
      path: '/past-trials',
      name: 'past trials page',
      component: PastTrialsPage
    },
    {
      path: '/how-it-works',
      name: 'how it works page',
      component: HowItWorksPage
    },
    {
      path: '/log-in',
      name: 'log in page',
      component: LogInPage
    }
  ]
})
