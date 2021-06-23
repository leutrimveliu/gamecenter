<template>
  <div id="app">
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Footer
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap'); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
