<template>
  <VForm @submit="createCategory">
    <h3 class="form-title">
      Создать категорию расходов
    </h3>
    <div class="form-field">
      <VInput
        v-model="categoryName"
        placeholder="Название категории"
        label="Введите название категории"
      />
    </div>
    <div class="form-field">
      <VColorInput v-model="categoryColor" />
    </div>
    <div class="form-field">
      <VButton>
        Создать категорию
      </VButton>
    </div>
  </VForm>
</template>

<script>
import { mapGetters } from 'vuex'
import VColorInput from '@/components/ui/VColorInput'
import VInput from '@/components/ui/VInput'
import VButton from '@/components/ui/VButton'
import VForm from '@/components/ui/VForm'
import { randomHex } from '@/helpers/utils'

export default {
  name: 'CreateCategoryForm',
  components: { VForm, VButton, VColorInput, VInput },
  data () {
    return {
      categoryName: '',
      categoryColor: '#ffffff'
    }
  },
  computed: {
    ...mapGetters({
      categoriesNames: 'categories/categoriesNames',
      userId: 'user/userId'
    })
  },
  mounted () {
    this.categoryColor = randomHex()
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
        }
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
