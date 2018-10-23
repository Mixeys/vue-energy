<template lang="pug">
  section#map
    gmap-map(:center="center" :zoom="14" style="width:100%;  height: 400px;")
        gmap-marker(:key="index" v-for="(m, index) in markers" :position="m.position" :icon="{ url: require('../assets/img/map-pin.png') }")
</template>

<script lang="js">
export default {
  name: "v-map",
  data() {
    return {
      center: { lat: 46.957543, lng: 31.992026 },
      markers: [
                    {
                        position: {
                            lat: 46.957543,
                            lng: 31.992026
                        }
                    }
                    ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
