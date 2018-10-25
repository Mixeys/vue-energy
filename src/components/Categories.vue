<template lang="pug">
section.categories
    .wrapper
        .categories__block
            .categories__title
                img(src="../assets/img/cat1.png" alt="cat").categories__img.categories__img--small
                h2.categories__h2 Похудение
            .categories__content
                p.categories__text Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
                img(src="../assets/img/cat1-tablet.png" alt="cat").categories__img.categories__img--big
            router-link.categories__link(:to="'/catalog'") Каталог Slim
                img.categories__link-img(src="../assets/img/long-right-arrow.svg" alt="right arrow")
        .categories__block
            .categories__title
                img(src="../assets/img/cat2.png" alt="cat").categories__img.categories__img--small
                h2.categories__h2 Набор массы
            .categories__content
                p.categories__text Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
                img(src="../assets/img/cat2-tablet.png" alt="cat").categories__img.categories__img--big
            router-link.categories__link(:to="'/catalog'") Каталог pro
                img.categories__link-img(src="../assets/img/long-right-arrow.svg" alt="right arrow")
</template>

<script lang="js">
  export default  {
    name: 'categories',
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
.categories {
    .wrapper {
        flex-direction: column;
    }
    &__block {
        margin-bottom: 20px;
        padding: 20px;
        background-color: #f2f2f2;
    }
    &__title {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
    }
    &__img {
        object-fit: contain;
        margin-right: 20px;
        &--big {
            display: none;
        }
    }
    &__h2 {
        font-size: 24px;
        text-transform: uppercase;
    }
    &__text {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        line-height: 18px;
    }
    &__link {
        color: #111111;
        font-family: Oswald;
        font-size: 16px;
        font-weight: 400;
        line-height: 1;
        text-transform: uppercase;
        text-decoration: none;
        &:hover {
            opacity: .6;
        }
        &:active {
            opacity: .3;
        }
    }
    &__link-img {
        display: inline-block;
        margin-left: 15px;
    }
}

@media screen and (min-width: 768px) {
    .categories {
        &__block {
            padding: 60px;
        }
        &__h2 {
            font-size: 36px;
        }
        &__img {
            &--big {
                display: block;
            }
            &--small {
                display: none;
            }
        }
        &__content {
            display: flex;
        }
        &__text {
            margin-right: 20px;
            font-size: 16px;
            line-height: 1.5;
            border-bottom: none;
        }
        &__link {
            font-size: 20px;
        }
    }
}

@media screen and (min-width: 1220px) {
    .categories {
        .wrapper {
            flex-direction: row;
        }
        &__block:first-child {
            margin-right: 80px;
        }
    }
}
</style>
