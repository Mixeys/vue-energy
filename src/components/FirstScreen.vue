<template lang="pug">
section.first-screen
    img(src="../assets/img/index-background-desktop.png" alt="green cat").first-screen__img
    .wrapper
        .first-screen__contain
            h1.first-screen__h1 Функциональное питание для котов
            h3.first-screen__h3 Занялся собой? Займись котом!
            router-link.btn.btn--green(:to="'/form'") Подобрать программу
</template>

<script lang="js">
  export default  {
    name: 'first-screen',
    data() {
      return {

      }
    }
}
</script>

<style scoped lang="scss">
.first-screen {
    position: relative;
    min-height: 500px;
    padding-top: 30px;
    color: #ffffff;
    font-family: Oswald;
    font-size: 14px;
    line-height: 1;
    background: url(../assets/img/energy.png) no-repeat center 80%;
    &__img {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        width: 100%;
        height: 50%;
        object-fit: cover;
    }
    .wrapper {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    &__h1 {
        margin: 0;
        margin-bottom: 20px;
        font-size: 36px;
    }
    &__h3 {
        margin-bottom: 300px;
        text-transform: uppercase;
    }
}

@media screen 
  and (max-width: 768px)
  and (orientation: landscape) {
      .first-screen {
          background: url(../assets/img/energy.png) no-repeat center 55%;
          &__img {
              width: 100%;
              height: 50%;
              object-fit: cover;
          }
      }
}

@media screen and (min-width: 768px) {
    .first-screen {
        background: url(../assets/img/energy-tablet.png) no-repeat center bottom;
        background-size: contain;
        &__img {
            display: none;
        }
        .wrapper {
            padding-left: 120px;
            text-align: left;
            align-items: flex-start;
        }
        &__contain {
            width: min-content;
        }
        &__h1 {
            padding-right: 200px;
            margin-bottom: 30px;
            color: #111111;
            font-size: 60px;
            font-weight: 400;
            line-height: 60px;
        }
        &__h3 {
            margin-bottom: 50px;
            color: #111111;
            font-size: 20px;
            font-weight: 400;
            line-height: 20px;
        }
        .btn--green {
            margin-bottom: 500px;
        }
    }
}

@media screen and (min-width: 1220px) {
    .first-screen {
        min-height: 570px;
        margin-bottom: 80px;
        padding-top: 100px;
        background: url(../assets/img/energy-desktop.png) no-repeat 75% center;
        &__contain {
            max-width: 620px;
            align-self: flex-start;
        }
        &__img {
            display: block;
            right: 0;
            top: 0;
            height: 100%;
            width: 50%;
        }
    }
    .first-screen {
        .btn--green {
            margin-bottom: 0;
        }
    }
}
</style>
