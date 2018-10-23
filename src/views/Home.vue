<template lang="pug">
  .home
    Header
    FirstScreen
    Categories
    Advantages
    Boris
    Contacts
    Map
    Footer
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import FirstScreen from '@/components/FirstScreen.vue'
import Contacts from '@/components/Contacts.vue'
import Categories from '@/components/Categories.vue'
import Advantages from '@/components/Advantages.vue'
import Boris from '@/components/Boris.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    FirstScreen,
    Categories,
    Advantages,
    Boris,
    Contacts,
    Map,
    Footer
  }
}
</script>
