<template>
<v-container fluid fill-height class="login">
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar>
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              prepend-icon="person"
              name="email" 
              label="Email" 
              type="email"
              :rules="emailRules"
              v-model="email"
              ></v-text-field>
            <v-text-field 
            id="password" 
            prepend-icon="lock" 
            name="password" 
            label="Password" 
            type="password"
            :rules="passwordRules"
            :counter="6"
            v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          @click="onSubmit"
          :loading="loading"
          :disabled="!valid || loading"
          >Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script lang="js">
  export default  {
    name: 'login',
    props: [],
    mounted() {

    },
    data() {
      return {
        email: '',
        password: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be equal or than 6 characters'
        ]
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit() {
        if(this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password,
          }
          this.$store.dispatch('loginUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => console.log(err))
        }
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.login {
  .v-toolbar {
    background-color: #68b738;
    &__title {
      color: white;
    }
  }
  button.v-btn {
    background-color: #68b738!important;
    color: white;
  }
}
</style>
