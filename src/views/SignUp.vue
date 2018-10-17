<template>
    <div class="fade-in">
        <div class="container">
            <div class="row">
                <Breadcrumb :items="items"/>
            </div>
        </div>

        <div class="col-md-12 d-flex justify-content-center">
            <form
                    id="signInForm"
                    class="sign-in-form"
                    @submit.prevent="preSignUp"
            >
                <div class="sign-up-form">
                    <h1 class="h3 mb-3 text-center font-weight-normal">{{ $t('signUp') | capitalize }}</h1>

                    <input
                            type="email"
                            class="form-control mb-2"
                            :placeholder="$t('emailAddress') | capitalize"
                            required
                            autofocus
                            v-model="emailAddress"
                            :disabled="signUpButtonLoading"
                    >

                    <input
                            type="password"
                            class="form-control mb-2"
                            :placeholder="$t('password') | capitalize"
                            required
                            v-model="password"
                            :disabled="signUpButtonLoading"
                    >

                    <input
                            type="password"
                            class="form-control mb-3"
                            :placeholder="$t('repeatPassword') | capitalize"
                            required
                            v-model="passwordConfirmation"
                            :disabled="signUpButtonLoading"
                    >

                    <button
                            type="submit"
                            class="btn btn-lg btn-success btn-block"
                            :disabled="buttonDisabled"
                    >
                        <template v-if="signUpButtonLoading">
                            <i class="fa fa-circle-o-notch fa-spin"></i>
                        </template>

                        <template v-else>
                            {{ $t('signUp') | capitalize }}
                        </template>
                    </button>
                </div>
            </form>
        </div>

        <div class="d-flex justify-content-center mt-3">
            <template v-if="signUpError">
                <div class="alert alert-danger sign-in-error" role="alert">
                    {{ $t(signUpError) | capitalize }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { authAPI } from '../api'
  import { Breadcrumb } from '../components'

  export default {
    name: 'SignUp',

    components: {
      Breadcrumb
    },

    data ()  {
      return {
        emailAddress: '',
        password: '',
        passwordConfirmation: '',
        signUpError: null,
        signUpButtonLoading: false
      }
    },

    methods: {
      ...mapActions('auth', [
        'signUp'
      ]),

      preSignUp () {
        this.signUpError = null
        this.signUpButtonLoading = true

        this.signUp({
          fn: authAPI.signUp,
          data: {
            emailAddress: this.emailAddress,
            password: this.password
          }
        })
          .then(() => {
            this.$router.push({ name: 'Home' })
            this.signUpButtonLoading = false
          })
          .catch(reason => {
            this.signUpError = reason
            this.signUpButtonLoading = false
          })
      }
    },

    computed: {
      buttonDisabled () {
        return !this.emailAddress || !this.password || (this.password != this.passwordConfirmation) || this.signUpButtonLoading
      },

      items () {
        return [
          {
            name: 'Home',
            text: this.$options.filters.capitalize(this.$t('home'))
          },
          {
            name: 'SignUp',
            text: this.$options.filters.capitalize(this.$t('signUp'))
          }
        ]
      }
    }
  }
</script>

<style scoped>
    .sign-up-form {
        min-width: 300px;
    }

    .alert.sign-in-error {
        width: 300px;
    }
</style>
