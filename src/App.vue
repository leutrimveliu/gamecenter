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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #3a4052;
  --secondary-color: rgba(0, 0, 0, 0.9);
  --white-color: rgba(255, 255, 255, 0.9);
  --black-alpha-6: rgba(0, 0, 0, 0.6);
  --white-alpha-6: rgba(255, 255, 255, 0.6);
  --white-alpha-3: rgba(255, 255, 255, 0.322);
  --btn-red: rgba(255, 62, 62, 0.6);
  --btn-green: rgba(146, 207, 97, 0.6);
}

html {
  scroll-behavior: smooth;
}

/* To hide scroll bar  */
html::-webkit-scrollbar {
  display: none;
}

body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
}

body ::selection {
  color: var(--white-color);
  background: var(--secondary-color);
}


a {
  text-decoration: none;
}

h1 {
  font-weight: 300;
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 15px;
}

.grayscale-100 {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>
