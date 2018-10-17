<template>
    <div>
        <Header/>

        <Main/>

        <Footer/>
    </div>
</template>

<script>
  import Header from './Header'
  import Main from './Main'
  import Footer from './Footer'

  export default {
    name: 'Layout',

    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style>
    .footer {
        width: 100%;
        position: absolute;
        bottom: 0;
    }
</style>
