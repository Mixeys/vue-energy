<template lang="pug">
footer.footer
    .wrapper
        .footer__title
            router-link(:to="'/'" @click.native="scrollToTop")
                img.footer__img(src="../assets/img/footer-logo.png", alt="logo")
        .footer__social.social
            a.social__link(:key="index" v-for="(link, index) in links" :href="link.link")
                i.fab(:class="link.class")
        .footer__copyright
            span.footer__text Academy
            a.footer__link(href="https://beetroot.academy/")
</template>

<script lang="js">
  export default  {
    name: 'v-footer',
    data() {
      return {
        links: [
          {
            class: 'fa-vk',
            link: 'javascript:void(0)'
          },
          {
            class: 'fa-instagram',
            link: 'javascript:void(0)'
          },
          {
            class: 'fa-facebook-f',
            link: 'javascript:void(0)'
          }
        ]
      }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style scoped lang="scss">
.footer {
    padding-top: 40px;
    padding-bottom: 20px;
    background-color: #f2f2f2;
    .wrapper {
        flex-direction: column;
    }
    &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
        border-bottom: 1px solid #dadada;
    }
    &__social {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
        border-bottom: 1px solid #dadada;
    }
    .social {
        &__link {
            text-decoration: none;
        }
    }
    .fab {
        font-size: 30px;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-color: #666666;
        -webkit-text-stroke-width: 1px;
        &:hover {
            -webkit-text-stroke-color:#68b738;
        }
    }
    &__copyright {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px;
    }
    &__link {
        display: block;
        width: 95px;
        height: 45px;
        background: url(../assets/img/beetroot.png) no-repeat center;
        background-size: contain;
        &:hover {
            transform: scale(1.1);
        }
    }
}

@media screen and (min-width: 768px) {
    .footer {
        padding-top: 60px;
        padding-bottom: 60px;
        .wrapper {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        &__title {
            border-bottom: none;
            padding-bottom: 0;
        }
        &__social {
            border-bottom: none;
            padding: 0;
        }
        &__copyright {
            padding-top: 0;
        }
        &__link {
            margin-left: 30px;
        }
        .social {
            &__link {
                margin-left: 30px;
            }
        }
    }
}
</style>
