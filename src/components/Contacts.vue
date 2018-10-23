<template lang="pug">

  section.contacts
    .wrapper
        h3.contacts__h3 приглашаем к сотрудничеству дилеров!
        p.contacts__address ул. Большая Морская, д.7 Николаев

</template>

<script lang="js">
  export default  {
    name: 'contacts',
    data() {
      return {

      }
    }
}
</script>

<style scoped lang="scss">
.contacts {
    padding: 30px 0;
    .wrapper {
        justify-content: space-between;
    }
    &__h3 {
        color: #111111;
        font-family: Oswald;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase;
    }
}

@media screen and (min-width: 768px) {
    .contacts {
        padding: 60px 0;
        &__h3 {
            font-size: 20px;
            line-height: 25px;
        }
    }
}
</style>
