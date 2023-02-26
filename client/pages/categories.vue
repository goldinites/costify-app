<template>
  <div v-if="userId" class="categories-list__wrapper">
    <CategoriesList />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Categories',
  computed: {
    ...mapGetters({
      userId: 'user/userId'
    })
  },
  mounted () {
    this.$store.dispatch('user/getUserData')
    this.$store.dispatch('categories/getCategories', {
      userId: this.userId
    })
  }
}
</script>

<style scoped>

</style>
