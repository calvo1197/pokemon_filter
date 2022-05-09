<template>
  <Info1 />
  <Info2 />
</template>

<script>
import Info1 from './Info1.vue'
import Info2 from './Info2.vue'
export default {
  name: 'landing-page',
  components: { Info1, Info2 },
  props: {},
  setup (props, context) {
    // const total = `Total price (50% offer): ${props.price / 2}`;
    return {
    }
  }
}
</script>

<style>

</style>
