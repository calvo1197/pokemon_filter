<template>
  <header class="header">
    <Nav />
  </header>
  <body>
    <router-view />
  </body>
  <footer class="footer">
    <Footer />
  </footer>
</template>

<script>
import Nav from './components/static/Nav.vue'
import Footer from './components/static/Footer.vue'
import '@/assets/css/fonts.css'
export default {
  components: { Nav, Footer },
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
  background-color: #ffffff;
  background-image: url('./assets/Backgrounds/Bg_Footer.png');
  background-size: contain;
  text-align-last: center;
}

.body-container {
  background-color: #ffffff;
  background-image: url('./assets/Backgrounds/Bg_Header.png');
  background-size: contain;
}

body {
  margin: 0;
}

.font-normal {
  font-family: 'Montserrat-ExtraLight';
}

.font-bold {
  font-family: 'Montserrat-Medium';
}

.font-semibold {
  font-family: 'Montserrat-SemiBold';
}

.font-green {
 color: #a3cc39;
}

.font-blue {
 color: #2aa7df;
}

h2 {
  margin-top: 0;
  margin-bottom: 0;
}

.shake:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>
