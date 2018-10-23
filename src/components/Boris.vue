<template lang="pug">
section.boris
    .wrapper
        .boris__wrap-outer
            .boris__wrap-inner
                h2.boris__h2 Живой пример
                p.boris__text Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день. 
                .boris__content
                    .boris__block
                        .boris__box
                            h2.boris__h2 5 кг
                            span.boris__smalltext снижение веса
                        .boris__box
                            h2.boris__h2 60 дней
                            span.boris__smalltext затрачено времени
                    h3.boris__h3 Затраты на питание: 15 000 руб.
            .boris__wrap-inner
                .boris__wrap-img
                    .boris__img1
                    .boris__img2
                .boris__wrap-range
                    label(for="range").boris__label Было
                    input(type="range" id="range" value="0" min="0" max="100" step="100" v-model="valueRange" @change="changeWidth")
                    label(for="range").boris__label Стало
</template>

<script lang="js">
  export default  {
    name: 'boris',
    data() {
      return {
        valueRange: '0',
      }
    },
    methods: {
      changeWidth() {
        let big = document.querySelector('.boris__img1')
        big.style.width = this.valueRange + '%'
      }
    },
}
</script>

<style scoped lang="scss">
.boris {
  padding: 30px 0;
  background-color: #f2f2f2;
  .wrapper {
    flex-direction: column;
  }
  &__h2 {
    margin-bottom: 30px;
  }
  &__text {
    margin-bottom: 25px;
  }
  &__block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  &__box {
    position: relative;
    min-width: 124px;
    padding: 15px;
    padding-bottom: 20px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #cdcdcd;
    .boris__h2 {
      margin-bottom: 0;
      font-size: 24px;
      text-transform: uppercase;
    }
  }
  &__smalltext {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    padding: 5px 10px;
    font-size: 12px;
    background-color: #f2f2f2;
    line-height: 1;
  }
  &__h3 {
    margin-bottom: 35px;
    color: #111111;
    font-family: Oswald;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
  }
  &__wrap-img {
    position: relative;
    min-height: 232px;
    width: 100%;
    margin-bottom: 35px;
  }
  &__img1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: 3;
    background: url(../assets/img/lean-cat.jpg) no-repeat center top;
  }
  &__img2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: url(../assets/img/fat-cat.jpg) no-repeat center top;
  }
  &__wrap-range {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__label {
    color: #111111;
    font-family: Oswald;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
  }
  input[type="range"] {
    width: 84px;
    height: 14px;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 6px;
    border: 1px solid #cdcdcd;
    -webkit-appearance: none;
    overflow: hidden;
    background-color: white;
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 35px;
    height: 6px;
    border-radius: 3px;
    background-color: #68b738;
    -webkit-appearance: none;
    cursor: ew-resize;
  }
}

@media screen and (min-width: 768px) {
  .boris {
        padding-top: 30px;
        padding-bottom: 60px;
        &__h2 {
            font-size: 60px;
            margin-bottom: 60px;
        }
        &__text {
            margin-bottom: 55px;
            font-size: 16px;
            line-height: 1.5;
        }
        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__box {
            padding: 20px;
            &:first-child {
                margin-right: 40px;
            }
            .boris__h2 {
                font-size: 30px;
            }
        }
        &__h3 {
            font-size: 20px;
        }
        &__label {
            font-size: 20px;
        }
    }
}

@media screen and (min-width: 1220px) {
  .boris {
        &__wrap-outer {
            display: flex;
        }
        &__wrap-inner {
            display: flex;
            flex-direction: column;
            flex-basis: 50%;
            align-items: center;
            justify-content: center;
            &:first-child {
                align-items: flex-start;
            }
        }
        &__content {
            flex-direction: column;
            align-items: flex-start;
        }
        &__block {
            margin-bottom: 80px;
        }
    }
}
</style>
