<template>
  <div id="costify" class="container">
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  name: 'Default',
  components: { TheHeader },
  mounted () {
    this.$store.dispatch('user/getUserData')
  }
}
</script>

<style scoped>

</style>
