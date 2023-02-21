<template>
  <form @submit.prevent="createCategory">
    <input v-model="categoryName" type="text" placeholder="Название категории">
    <input v-model="categoryColor" type="text" placeholder="Цвет категории">
    <button type="submit">
      Создать категорию
    </button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  data () {
    return {
      categoryName: '',
      categoryColor: ''
    }
  },
  computed: {
    ...mapGetters({
      userId: 'user/getUserId'
    })
  },
  mounted () {
    fetch('/api/user')
      .then(res => res.json())
      .then(userData => this.$store.dispatch('user/getUserData', userData))
  },
  methods: {
    createCategory () {
      const categoryData = {
        name: this.categoryName,
        color: this.categoryColor,
        userId: this.userId
      }
      this.$store.dispatch('categories/createCategory', categoryData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
