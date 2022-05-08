<template>
  <header class="header">
    <Nav />
  </header>
  <body class="body-container">
    <router-view />
  </body>
  <footer class="footer">

  </footer>
</template>

<script>
import Nav from './components/static/Nav.vue'
import '@/assets/css/fonts.css'
export default {
  components: { Nav },
  setup () {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footer {
background-color: #eeeeee;
background-image: url('./assets/Backgrounds/Bg_Footer.png');
background-size: contain;
}

.body-container {
  background-color: #eeeeee;
  background-image: url('./assets/Backgrounds/Bg_Header.png');
  background-size: contain;
  padding-top: 65px;
}

body {
  margin: 0;
}

</style>
