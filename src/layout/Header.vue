<template>
    <header>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <router-link
                    class="my-0 mr-md-auto font-weight-normal border-0"
                    :to="{ name: 'Home' }"
            >
                <img
                        class="logo"
                        alt="Vue logo"
                        src="../assets/logo.png"
                >
            </router-link>

            <nav class="my-2 my-md-0 mr-md-3">
                <router-link
                        class="p-2 text-dark"
                        :to="{ name: 'Home' }"
                >
                    {{ $t('home') | capitalize }}
                </router-link>
            </nav>

            <template v-if="signedIn">
                <button
                        class="btn btn-outline-danger mr-3"
                        @click="preSignOut"
                >
                    {{ $t('signOut') | capitalize }}
                </button>
            </template>

            <template v-else>
                <router-link
                        class="btn btn-outline-primary mr-3"
                        :to="{ name: 'SignIn' }"
                >
                    {{ $t('signIn') | capitalize }}
                </router-link>

                <router-link
                        class="btn btn-outline-success"
                        :to="{ name: 'SignUp' }"
                >
                    {{ $t('signUp') | capitalize }}
                </router-link>
            </template>
        </div>
    </header>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { authAPI } from '../api'

  export default {
    name: 'Header',

    methods: {
      ...mapActions('auth', [
        'signOut'
      ]),

      preSignOut () {
        this.signOut({
          fn: authAPI.signOut
        })
          .then(() => {
            this.$router.push({ name: 'Home' })
          })
      }
    },

    computed: {
      ...mapGetters('auth', [
        'signedIn'
      ])
    }
  }
</script>

<style>
    .router-link-exact-active {
        border-bottom: 1px solid #1d2124;
    }

    a:hover {
        text-decoration: none;
    }
</style>