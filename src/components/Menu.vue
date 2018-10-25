<template lang="pug">
nav.menu
  ul.menu__list
      li.menu__item(v-for="(item, index) in items" :key="index")
          router-link.menu__link(:to="item.link" active-class="active" exact)
              span {{ item.title }}
      li.menu__item(@click="onLogout" v-if="isUserLoggedIn")
          a.menu__link()
              span Выход
</template>

<script>
export default {
  name: "v-menu",
  data() {
    return {
      
    };
  },
  methods: {
      onLogout() {
        this.$store.dispatch('logoutUser')
        this.$router.push('/')
      },
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    items() {
      if (this.isUserLoggedIn) {
        return [
          {
            title: "Главная",
            link: "/"
          },
          {
            title: "Каталог продукции",
            link: "/catalog"
          },
        ];
      } else {
        return [
            {
            title: "Главная",
            link: "/"
          },
          {
            title: "Каталог продукции",
            link: "/catalog"
          },
          {
            title: "Подбор программы",
            link: "/form"
          },
          {
            title: "Вход",
            link: "/login"
          },
          {
            title: "Регистрация",
            link: "/register"
          }
        ];
      }
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu {
  position: absolute;
  z-index: 10;
  top: calc(100% + 15px);
  left: 0;
  display: none;
  width: 100%;
  background-color: white;
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &__item {
    border-top: 1px solid #e6e6e6;
    &:last-child {
        border-bottom: 1px solid #e6e6e6;
    }
  }
  &__link {
    display: block;
    padding: 20px;
    text-align: center;
    color: #111111;
    font-family: Oswald;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    span {
        display: inline-block;
        min-height: 22px;
        box-sizing: border-box;
    }
    &:hover {
      opacity: 0.6;
      span {
        border-bottom: 2px solid #68b738;
      }
    }
    &:active {
      opacity: 0.3;
      span {
        border-bottom: 2px solid #68b738;
      }
    }
  }
}

.is-active + .menu {
  display: block;
}

.active {
  span {
    border-bottom: 2px solid #68b738;
  }
}

@media screen and (min-width: 768px) {
  .menu {
    display: flex;
    position: static;
    max-width: 70%;
    &__list {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    &__item {
      border-top: none;
      &:last-child {
        border-bottom: none;
    }
      &:last-child a {
        padding-right: 0;
      }
    }
    &__link {
      padding: 20px 15px;
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 1220px) {
  .menu {
    justify-content: flex-end;
    background-color: transparent;
    &__link {
      &:hover {
        span {
          border-bottom: 2px solid black;
        }
      }
      &:active {
        span {
          border-bottom: 2px solid black;
        }
      }
    }
    .active {
      span {
        border-bottom: 2px solid black;
      }
    }
  }
}
</style>
