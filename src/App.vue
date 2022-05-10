<template>
  <header class="header">
    <Nav :scrollToElement="scrollToElement" />
  </header>
  <body>
    <router-view />
  </body>
  <footer class="footer">
    <Footer :scrollToElement="scrollToElement" />
  </footer>
</template>

<script>
import Nav from './components/static/Nav.vue'
import Footer from './components/static/Footer.vue'
import '@/assets/css/fonts.css'
export default {
  components: { Nav, Footer },
  setup () {
    function scrollToElement (sectionName) {
      const el = document.getElementById(`${sectionName}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    return {
      scrollToElement
    }
  }
}
</script>

<style src="./assets/css/main.css">

</style>
