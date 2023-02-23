<template>
  <form class="form" @submit.prevent="createCategory">
    <VInput
      v-model="categoryName"
      placeholder="Название категории"
      label="Введите название категории"
    />
    <VColorInput v-model="categoryColor" />
    <VButton @click="createCategory">
      Создать категорию
    </VButton>
    <div>
      <span v-show="error">{{ error }}</span>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import VColorInput from '@/components/ui/VColorInput'
import VInput from '@/components/ui/VInput'
import VButton from '@/components/ui/VButton'

export default {
  name: 'CreateCategoryForm',
  components: { VButton, VColorInput, VInput },
  data () {
    return {
      categoryName: '',
      categoryColor: '#ffffff',
      error: ''
    }
  },
  computed: {
    ...mapGetters({
      categoriesNames: 'categories/categoriesNames',
      userId: 'user/userId'
    })
  },
  methods: {
    createCategory () {
      if (this.checkNotEmptyCategoryName(this.categoryName)) {
        if (this.checkCategoryName(this.categoryName)) {
          const categoryData = {
            name: this.categoryName,
            color: this.categoryColor,
            userId: this.userId
          }
          this.$store.dispatch('categories/createCategory', categoryData)
          this.clearFormFields()
          this.error = ''
        } else {
          this.error = 'Категория с таким названием уже существует'
        }
      } else {
        this.error = 'Введите название категории'
      }
    },
    checkNotEmptyCategoryName (name) {
      return name.length
    },
    checkCategoryName (name) {
      return this.categoriesNames.every(category => category.toLowerCase() !== name.toLowerCase())
    },
    clearFormFields () {
      this.categoryName = ''
      this.categoryColor = '#ffffff'
    }
  }
}
</script>

<style scoped>

</style>
