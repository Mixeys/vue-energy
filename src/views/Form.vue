<template lang="pug">
    .form
        Header
        FormComponent
        Contacts
        Map
        Footer
</template>

<script>

import Header from '@/components/Header.vue'
import FormComponent from '@/components/FormComponent.vue'
import Contacts from '@/components/Contacts.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'form',
    components: {
        Header,
        FormComponent,
        Contacts,
        Map,
        Footer,
    }
}
</script>


<style lang="scss" scoped>

</style>

