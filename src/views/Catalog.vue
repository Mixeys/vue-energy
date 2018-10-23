<template lang="pug">
.catalog
  Header
  Catalog
  Extra
  Contacts
  Map
  Footer
</template>

<script>

import Header from '@/components/Header.vue'
import Catalog from '@/components/Catalog.vue'
import Extra from '@/components/Extra.vue'
import Contacts from '@/components/Contacts.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'catalog',
  components: {
    Header,
    Catalog,
    Extra,
    Contacts,
    Map,
    Footer
  }
}
</script>
