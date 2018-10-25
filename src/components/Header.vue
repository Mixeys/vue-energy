<template lang="pug">
header#head
  section.top-bar
    .wrapper
        router-link.logo.top-bar__logo(:to="'/'")
            picture
                source(media="(min-width: 768px)" srcset="../assets/img/logo-tablet.png")
                source(media="(min-width: 1220px)" srcset="../assets/img/logo-desktop.png")
                img.logo__img(src="../assets/img/logo-mobile.png" alt="logo")
        router-link.logo.top-bar__logo-text(:to="'/'")
            img.logo__img(src="../assets/img/logo-mobile-header.png" alt="logo-header")
        Humburger
        Menu

</template>

<script lang="js">

import Humburger from '@/components/Humburger.vue'
import Menu from '@/components/Menu.vue'

  export default  {
    name: 'v-header',
    components: {
      Humburger,
      Menu,
    },
    data() {
      return {

      }
    }
}
</script>

<style scoped lang="scss">
.top-bar {
    padding-top: 10px;
    padding-bottom: 15px;
    .wrapper {
        position: relative;
        justify-content: space-between;
        align-items: center;
    }
}

@media screen and (min-width: 768px) {
    .wrapper {
        padding: 0 30px;
    }
    header {
        background: none;
    }
    .top-bar {
        &__logo-text {
            display: none;
            padding-top: 25px;
            padding-bottom: 20px;
        }
    }
    .hamburger { 
        display: none;
    }
}

@media screen and (min-width: 1220px) {
    .wrapper {
        padding: 0 110px;
    }
    header {
        margin-bottom: 0;
        .top-bar {
        padding-top: 35px;
        }
    }
}
</style>
