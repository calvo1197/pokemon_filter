<template>
  <footer>
    <img
      class="foot-img" src="../../assets/Ic_Wolox_Footer.svg"
      alt="footer"
      style="width: 10%;"
      @click="scrollToElement('home')"
    >
  </footer>
</template>

<script>
export default {
  name: 'footer-page',
  props: { scrollToElement: { type: Function } },
  setup () {
  }
}
</script>

<style scoped>
.foot-img {
  width: 200px;
  cursor: pointer;
}

</style>
