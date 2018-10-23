<template lang="pug">
section.extra
    .wrapper
        h2.extra__h2 Дополнительные товары
        .extra__wrap
            ul.extra__list
                li.extra__item
                    .extra__content
                        h3.extra__h3 Сахарозаменитель
                        p.extra__text
                            span.extra__span 1 упаковка (100 г)
                            span.extra__span 100$
                    button.btn.btn--green Заказать
                li.extra__item
                    .extra__content
                        h3.extra__h3 Питьевая вода
                        p.extra__text
                            span.extra__span 5 литров
                            span.extra__span 50$
                    button.btn.btn--green Заказать
                li.extra__item
                    .extra__content
                        h3.extra__h3 Молоко
                        p.extra__text
                            span.extra__span 1 литр
                            span.extra__span 100$
                    button.btn.btn--green Заказать
                li.extra__item
                    .extra__content
                        h3.extra__h3 Витамины
                        p.extra__text
                            span.extra__span 1 упаковка (30 г)
                            span.extra__span 200$
                    button.btn.btn--green Заказать
            .extra__green
                i.fas.fa-gift
                p.extra__text.extra__text--white Закажите все и получите чехол для кота в подарок!
</template>

<script lang="js">
  export default  {
    name: 'extra',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.extra {
    padding-top: 30px;
    .wrapper {
        flex-direction: column;
    }
    &__h2 {
        padding-bottom: 30px;
        color: #111111;
        font-family: Oswald;
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        border-bottom: 1px solid #dedede;
    }
    &__item {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #dedede;
        &:last-child {
            margin-bottom: 40px;
        }
    }
    &__h3 {
        margin-bottom: 15px;
        color: #222222;
        font-family: Oswald;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        text-transform: uppercase;
    }
    &__text {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        color: #444444;
        font-family: "Work Sans";
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
    }
    &__green {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 289px;
        padding-top: 65px;
        padding-left: 60px;
        padding-right: 60px;
        text-align: center;
        background: url(../assets/img/gift.png) no-repeat center;
        background-size: cover;
    }
    .fas {
        margin-bottom: 65px;
        color: white;
        font-size: 60px;
    }
    &__text--white {
        color: #ffffff;
        font-size: 16px;
        line-height: 20px;
    }
}

@media screen and (min-width: 768px) {
    .extra {
        &__h2 {
            padding-bottom: 75px;
            font-size: 36px;
        }
        &__item {
            padding: 30px 40px;
        }
        &__h3 {
            margin-bottom: 30px;
            font-size: 20px;
        }
        &__content {
            display: flex;
            justify-content: space-between;
        }
        &__span {
            &:first-child {
                margin-right: 50px;
            }
        }
        &__green {
            justify-content: space-between;
            flex-direction: row;
            padding-left: 90px;
            padding-right: 90px;
        }
        &__text {
            font-size: 16px;
            &--white {
                max-width: 160px;
            }
        }
    }
}

@media screen and (min-width: 1220px) {
    .extra {
        &__h2 {
            border-bottom: 0;
        }
        &__wrap {
            display: flex;
            justify-content: space-between;
        }
        &__list {
            margin-right: 80px;
        }
        &__item {
            flex-direction: row;
            align-items: center;
            width: fit-content;
            padding-right: 0;
            &:first-child {
                border-top: 1px solid #dedede;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__content {
            min-width: 600px;
            margin-right: 40px;
        }
        &__h3 {
            margin-bottom: 0;
        }
        &__text {
            min-width: 285px;
            margin-bottom: 0;
        }
        &__span {
            &:first-child {
                align-self: flex-start;
            }
        }
        .btn--green {
            min-width: 245px;
        }
        &__green {
            flex-direction: column;
            justify-content: center;
        }
    }
}
</style>
