<template lang="pug">
section.advantages
    .wrapper
        h2.advantages__h2 Как это работает
        ul.advantages__list
            li.advantages__item(:key="index" v-for="(item,index) in items")
                span.advantages__number {{ index + 1 }}
                .advantages__img
                p.advantages__text {{ item }}
</template>

<script lang="js">
  export default  {
    name: 'advantages',
    data() {
      return {
        items: [
          'Функциональное питание содержит только полезные питательные вещества.',
          'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.',
          'Замените один-два приема обычной еды на наше функциональное питание.',
          'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!'
        ]
      }
    }
}
</script>

<style scoped lang="scss">
.advantages {
    margin-bottom: 20px;
    padding-top: 10px;
    .wrapper {
        flex-direction: column;
    }
    &__h2 {
        margin-bottom: 35px;
        color: #111111;
        font-family: Oswald;
        font-size: 36px;
        font-weight: 400;
        line-height: 1;
    }
    &__list {
        display: flex;
        flex-direction: column;
    }
    &__item {
        display: flex;
        margin-bottom: 20px;
        &:nth-child(1) .advantages__img {
            background-position: 15px 15px;
        }
        &:nth-child(2) .advantages__img {
            background-position: 15px -60px;
        }
        &:nth-child(3) .advantages__img {
            background-position: 15px -140px;
        }
        &:nth-child(4) .advantages__img {
            background-position: 15px -220px;
        }
    }
    &__img {
        min-width: 60px;
        height: 60px;
        margin-right: 20px;
        background-image: url('../assets/img/icons-sprite.png');
        background-color: #68b738;
        background-repeat: no-repeat;
    }
    &__number {
        display: none;
    }
}

@media screen and (min-width: 768px) {
    .advantages {
        padding-top: 30px;
        &__h2 {
            margin-bottom: 60px;
            font-size: 60px;
        }
        &__list {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        &__item {
            position: relative;
            z-index: 1;
            width: 250px;
            margin-right: 80px;
            margin-bottom: 90px;
            flex-direction: column;
            &:nth-child(1) .advantages__img {
                background-position: 25px 25px;
            }
            &:nth-child(2) .advantages__img {
                background-position: 25px -50px;
            }
            &:nth-child(3) .advantages__img {
                background-position: 25px -130px;
            }
            &:nth-child(4) .advantages__img {
                background-position: 25px -210px;
            }
        }
        &__img {
            width: 80px;
            height: 80px;
            margin-bottom: 35px;
        }
        &__number {
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
            display: block;
            color: #f2f2f2;
            font-family: Oswald;
            font-size: 281px;
            font-weight: 400;
            line-height: .7;
        }
    }
}
</style>
