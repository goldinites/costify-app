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
  components: { TheHeader }
}
</script>

<style scoped>

</style>
