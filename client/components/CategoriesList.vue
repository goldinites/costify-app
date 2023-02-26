<template>
  <div class="categories">
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="category"
      :style="`color: ${category.color}`"
    >
      {{ category.name }}
      <span @click="deleteCategory(category.id)"> &times; </span>
    </div>
    <!--    <VPagination :elements="11" :limit="10" @change-page="changePage($event)" />-->
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
    },
    changePage (event) {
      // console.log(event)
    }
  }
}
</script>

<style scoped>

</style>
