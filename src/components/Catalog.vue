<template lang="pug">
section.catalog
    .wrapper
        h1.catalog__h1 Каталог продукции
        ul.catalog__list
            li.catalog__item(:key="index" v-for="(item, index) in items")
                .catalog__content
                    picture
                        source(media="(min-width: 768px)" :srcset="item.srcset")
                        img.catalog__img(:src="item.src" alt="food for cat")
                    .catalog__info
                        h3.catalog__h3
                            | Cat Energy 
                            br
                            | {{ item.name }}
                        ul.catalog__sublist
                            li.catalog__subitem
                                span.catalog__span Объем
                                span.catalog__span {{ item.volume }}
                            li.catalog__subitem
                                span.catalog__span Вкус
                                span.catalog__span {{ item.consist }}
                            li.catalog__subitem
                                span.catalog__span Цена
                                span.catalog__span {{ item.price }}
                button.btn.btn--green Заказать
            li.catalog__item
                i.fas.fa-plus
                h2.catalog__h2 Показать еще 100500 товаров
                p.catalog__text На самом деле вкусов гораздо больше!
                button.btn.btn--grey(@click="dubleArray") Показать все
</template>

<script lang="js">
  export default  {
    name: 'catalog',
    data() {
      return {
          array: [
              {
                  srcset: require('../assets/img/catalog-1.png'),
                  src: require('../assets/img/catalog-1-mobile.png'),
                  name: 'PRO 500 г',
                  volume: '500г',
                  consist: 'Курица',
                  price: '700'
              },
              {
                  srcset: require('../assets/img/catalog-2.png'),
                  src: require('../assets/img/catalog-2-mobile.png'),
                  name: 'PRO 1000 г',
                  volume: '1000 г',
                  consist: 'Курица',
                  price: '1000'
              },
              {
                  srcset: require('../assets/img/catalog-3.png'),
                  src: require('../assets/img/catalog-3-mobile.png'),
                  name: 'PRO 500 г',
                  volume: '500 г',
                  consist: 'Рыба',
                  price: '700'
              },
              {
                  srcset: require('../assets/img/catalog-4.png'),
                  src: require('../assets/img/catalog-4-mobile.png'),
                  name: 'PRO 1000 г',
                  volume: '1000 г',
                  consist: 'Рыба',
                  price: '1000'
              },
              {
                  srcset: require('../assets/img/catalog-5.png'),
                  src: require('../assets/img/catalog-5-mobile.png'),
                  name: 'slim 500 г',
                  volume: '500 г',
                  consist: 'Гречка',
                  price: '700'
              },
              {
                  srcset: require('../assets/img/catalog-6.png'),
                  src: require('../assets/img/catalog-6-mobile.png'),
                  name: 'slim 1000 г',
                  volume: '1000 г',
                  consist: 'Гречка',
                  price: '1000'
              },
              {
                  srcset: require('../assets/img/catalog-7.png'),
                  src: require('../assets/img/catalog-7-mobile.png'),
                  name: 'slim 500 г',
                  volume: '500 г',
                  consist: 'Рис',
                  price: '700'
              }
          ]
      }
    },
    computed: {
        items() {
            return this.array
        }
    },
    methods: {
        dubleArray() {
            return this.array = this.array.concat(this.array)
        }
    }
}
</script>

<style scoped lang="scss">
.catalog {
    .wrapper {
        flex-direction: column;
        align-items: flex-start;
    }
    &__h1 {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
    }
    &__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 0;
    }
    &__item {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding-bottom: 25px;
        border-bottom: 1px solid #dedede;
        &:last-child {
            align-items: center;
            padding-top: 25px;
            .btn {
                align-self: stretch;
            }
        }
    }
    &__content {
        display: flex;
    }
    &__info {
        width: 100%;
        padding-top: 25px;
    }
    &__h3 {
        margin-bottom: 20px;
        color: #111111;
        font-family: Oswald;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase;
    }
    &__subitem {
        display: flex;
        justify-content: space-between;
        &:last-child {
            margin-bottom: 25px;
        }
    }
    &__span {
        color: #444444;
        font-family: "Work Sans";
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }
    .fas {
        margin-bottom: 25px;
        font-size: 30px;
        color: #d3d3d3;
    }
    &__h2 {
        margin-bottom: 10px;
        color: #111111;
        font-family: Oswald;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase;
    }
    &__text {
        margin-bottom: 20px;
        color: #444444;
        font-family: "Work Sans";
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }
}

@media screen and (min-width: 768px) {
    .catalog {
        &__h1 {
            margin-bottom: 75px;
            font-size: 60px;
            border: none;
        }
        &__list {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        &__item {
            position: relative;
            flex-basis: 324px;
            min-height: 430px;
            padding: 40px;
            padding-top: 100px;
            margin-top: 80px;
            margin-bottom: 60px;
            justify-content: space-between;
            background-color:#f2f2f2;
            border-bottom: none;
            &:last-child {
                padding-top: 55px;
                text-align: center;
                background-color: #fff;
                border: 1px solid #cdcdcd;
            }
        }
        &__content {
            flex-direction: column;
        }
        &__img {
            position: absolute;
            bottom: 320px;
            left: 50%;
            transform: translateX(-50%);
        }
        &__h3 {
            font-size: 20px;
            text-align: center;
        }
        &__subitem {
            padding: 10px 0;
            border-bottom: 1px solid #cdcdcd;
            &:last-child {
                margin-bottom: 30px;
            }
        }
        &__span {
            font-size: 16px;
        }
        .fas {
            font-size: 60px;
        }
        &__h2 {
            font-size: 20px;
        }
        &__text {
            font-size: 16px;
        }
    }
}
</style>
