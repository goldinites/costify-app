<template>
  <div class="categories">
    <div v-for="(category, index) in categories" :key="index" class="category" :style="`color: ${category.color}`">
      {{ category.name }}
      <span @click="deleteCategory(category.id)"> &times; </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CategoriesList',
  computed: {
    ...mapGetters({
      categories: 'categories/categories'
    })
  },
  methods: {
    deleteCategory (id) {
      this.$store.dispatch('categories/deleteCategory', { id })
    }
  }
}
</script>

<style scoped>

</style>
