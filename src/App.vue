<template>
  <router-view/>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import { mapActions } from 'vuex'

  export default {
    name: 'App',

    methods: {
      ...mapActions([
        'init'
      ])
    },

    mounted () {
      this.init()
    }
  }
</script>

<style>
    @import url('../node_modules/font-awesome/css/font-awesome.min.css');

    .fade-in {
        -webkit-animation: fade-in .6s;
        -moz-animation: fade-in .6s;
        -ms-animation: fade-in .6s;
        -o-animation: fade-in .6s;
        animation: fade-in .6s;
    }

    @keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-moz-keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-webkit-keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-ms-keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-o-keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
</style>
