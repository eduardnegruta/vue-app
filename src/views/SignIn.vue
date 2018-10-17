<template>
    <div class="fade-in">
        <div class="container">
            <div class="row">
                <Breadcrumb :items="items"/>
            </div>
        </div>

        <div class="d-flex justify-content-center">
            <form
                    id="signInForm"
                    class="sign-in-form"
                    @submit.prevent="preSignIn"
            >
                <h1 class="h3 mb-3 text-center font-weight-normal">{{ $t('signIn') | capitalize }}</h1>

                <input
                        type="email"
                        id="signInFormEmailAddress"
                        class="form-control mb-2"
                        :placeholder="$t('emailAddress') | capitalize"
                        required
                        autofocus
                        v-model="emailAddress"
                        :disabled="signInButtonLoading"
                >

                <input
                        type="password"
                        id="signInFormPassword"
                        class="form-control mb-3"
                        :placeholder="$t('password') | capitalize"
                        required
                        v-model="password"
                        :disabled="signInButtonLoading"
                >

                <button
                        type="submit"
                        class="btn btn-lg btn-primary btn-block"
                        :disabled="buttonDisabled"
                >
                    <template v-if="signInButtonLoading">
                        <i class="fa fa-circle-o-notch fa-spin"></i>
                    </template>

                    <template v-else>
                        {{ $t('signIn') | capitalize }}
                    </template>
                </button>
            </form>
        </div>

        <div class="d-flex justify-content-center mt-3">
            <template v-if="signInError">
                <div class="alert alert-danger sign-in-error" role="alert">
                    {{ $t(signInError) | capitalize }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { authAPI } from '../api'
  import { Breadcrumb } from '../components'

  export default {
    name: 'SignIn',

    components: {
      Breadcrumb
    },

    data ()  {
      return {
        emailAddress: '',
        password: '',
        signInError: null,
        signInButtonLoading: false
      }
    },

    methods: {
      ...mapActions('auth', [
        'signIn'
      ]),

      preSignIn () {
        this.signInError = null
        this.signInButtonLoading = true

        this.signIn({
          fn: authAPI.signIn,
          data: {
            emailAddress: this.emailAddress,
            password: this.password
          }
        })
          .then(() => {
            this.$router.push({ name: 'Home' })
            this.signInButtonLoading = false
          })
          .catch(reason => {
            this.signInError = reason
            this.signInButtonLoading = false
          })
      }
    },

    computed: {
      ...mapGetters('auth', [
        'signedIn'
      ]),

      buttonDisabled () {
        return !this.emailAddress || !this.password || this.signInButtonLoading
      },

      items () {
        return [
          {
            name: 'Home',
            text: this.$options.filters.capitalize(this.$t('home'))
          },
          {
            name: 'SignIn',
            text: this.$options.filters.capitalize(this.$t('signIn'))
          }
        ]
      }
    },

    mounted () {
      if (this.signedIn) {
        this.$router.push({ name: 'Home' })
      }
    }
  }
</script>

<style scoped>
    .sign-in-form {
        width: 300px;
    }

    .alert.sign-in-error {
        width: 300px;
    }
</style>
