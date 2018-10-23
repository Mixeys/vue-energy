<template lang="pug">
section.form
    .wrapper
        h1.form__h1 Подбор программы
        h3.form__h3 Заполните анкету и мы подберем программу питания для вашего кота
        form(action="#", method="post")
            .form__content
                .form__box
                    label(for="name").form__label Имя:*
                    input(type="text" placeholder="Барсик" required)#name.form__input.form__input--text
                .form__box
                    label(for="waight").form__label Вес (кг):*
                    input(type="text" placeholder="7" required)#waight.form__input.form__input--text
                .form__box
                    label(for="age").form__label Возраст (лет):
                    input(type="text" placeholder="7")#age.form__input.form__input--text
                input(type="radio" name="radiobutton")#radio1.form__input.form__input--radio
                label(for="radio1").form__label.form__label--radio
                input(type="radio" name="radiobutton")#radio2.form__input.form__input--radio
                label(for="radio2").form__label.form__label--radio
                input(type="radio" name="radiobutton")#radio3.form__input.form__input--radio
                label(for="radio3").form__label.form__label--radio
            h2.form__h2 Контактные данные #[br] (владельца кота)
            .form__content
                .form__box
                    label(for="email").form__label E-mail:*
                    .form__contact
                        input(type="email" placeholder="lovecat@gmail.com" required)#email.form__input.form__input--text.form__input--contact
                        i.far.fa-envelope.form__icon
                .form__box
                    label(for="tel").form__label Телефон:*
                    .form__contact
                        input(type="tel" placeholder="8 (960) 900-60-90" required)#tel.form__input.form__input--text.form__input--contact
                        i.fas.fa-phone.form__icon
            h2.form__h2 Комментарий
            textarea(name="area" placeholder="Расскажите обо всех повадках кота").form__input.form__input--textarea
            h2.form__h2 Дополнительно
            .form__content
                input(type="checkbox")#check1.form__input.form__input--checkbox
                label(for="check1").form__label.form__label--checkbox Сахарозаменитель
                input(type="checkbox")#check2.form__input.form__input--checkbox
                label(for="check2").form__label.form__label--checkbox Питьевая вода
                input(type="checkbox")#check3.form__input.form__input--checkbox
                label(for="check3").form__label.form__label--checkbox Молоко
                input(type="checkbox")#check4.form__input.form__input--checkbox
                label(for="check4").form__label.form__label--checkbox Витамины
            input(type="submit", value="Отправить заявку").btn.btn--green
            p.form__text * — Обязательные поля
</template>

<script lang="js">
  export default  {
    name: 'form-component',
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
.form {
  padding-top: 30px;
  border-top: 1px solid #e6e6e6;
  .wrapper {
    flex-direction: column;
  }
  &__h1 {
    margin-bottom: 25px;
    color: #111111;
    font-family: Oswald;
    font-size: 36px;
    font-weight: 400;
    line-height: 60px;
  }
  &__h3 {
    margin-bottom: 40px;
    color: #111111;
    font-family: Oswald;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-transform: uppercase;
  }
  &__content {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e6e6e6;
  }
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    &:nth-of-type(3) {
        margin-bottom: 45px;
    }
  }
  &__label {
    color: #222222;
    font-family: Oswald;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    text-transform: uppercase;
    &--radio {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        margin-bottom: 15px;

        border: 1px solid #cdcdcd;
        background: #fff;
        border-radius: 50%;
        &:last-child {
            margin-bottom: 20px;
        }
        &:nth-of-type(1)::after {
            content: "Похудение";
            position: absolute;
            left: 45px;
            top: 50%;
            transform: translateY(-50%);
        }
        &:nth-of-type(2)::after {
            content: "Набор массы";
            position: absolute;
            left: 45px;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            width: max-content;
        }
        &:nth-of-type(3)::after {
            content: "Не знаю (Нужен ваш совет)";
            position: absolute;
            left: 45px;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            width: max-content;
        }
    }
    &--checkbox {
      position: relative;
      margin-bottom: 30px;
      padding-left: 45px;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        display: inline-block;
        border: 1px solid #cdcdcd;

      }
    }
  }
  &__input {
    width: 200px;
    border: 1px solid #cdcdcd;
    &::placeholder {
      font-family: Oswald;
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      text-transform: uppercase;
    }
    &--text {
      padding: 15px;
    }
    &--radio {
        display: none;
       &:checked + label {
         background: #fff;
       }
       &:checked + label::before {
         content: "";
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         background-color: #68b738;
         width: 12px;
         height: 12px;
         border-radius: 50%;
       }
    }
    &--contact {
      padding-right: 30px;
    }
    &--textarea {
      width: 100%;
      min-height: 150px;
      padding: 15px;
    }
    &--checkbox {
      display: none;
      &:checked + label::after {
        content: '';
        position: absolute;
        left: 5px;
        top: 0;
        display: inline-block;
        width: 20px;
        height: 10px;
        border-left: 2px solid #68b738;
        border-bottom: 2px solid #68b738;
        transform: rotate(-45deg);
      }
    }
  }
  &__h2 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 24px;
  }
  &__contact {
    position: relative;
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: calc(100% - 25px);
    transform: translateY(-50%);
    color: #222;
  }
  .btn {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__text {
    text-align: center;
  }
}

</style>
