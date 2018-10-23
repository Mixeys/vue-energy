import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase/app'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAZn0KltqBAgc8mMk-k8y8CZ5AantnzTUM'
  }
})
Vue.use(Vuetify)

new Vue({
  router,
  store,
  created() {
    var config = {
      apiKey: 'AIzaSyDmZgXp_R93d362Q0frzx1XIsNfGR__0Hg',
      authDomain: 'cat-energy-216613.firebaseapp.com',
      databaseURL: 'https://cat-energy-216613.firebaseio.com',
      projectId: 'cat-energy-216613',
      storageBucket: 'cat-energy-216613.appspot.com',
      messagingSenderId: '7790982305'
    }
    fb.initializeApp(config)

    fb.auth().onAuthStateChanged( user => {
      if(user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
