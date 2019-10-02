import Vue from 'vue'
import App from './App.vue'
import Intro from './components/introduction.vue'
import Education from './components/education.vue'
import Skills from './components/skills.vue'

Vue.component('crb-intro', Intro)
Vue.component('crb-education', Education)
Vue.component('crb-skill', Skills)

new Vue({
  el: '#app',
  render: h => h(App)
})
