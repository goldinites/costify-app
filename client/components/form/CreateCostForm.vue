<template>
  <VForm>
    <div class="form-field">
      <VInput
        v-model="categoryName"
        placeholder="Название расхода"
        label="Введите название расхода"
      />
    </div>
    <div class="form-field">
      <VInput
        v-model="categoryName"
        placeholder="Стоимость расхода"
        label="Введите стоимость расхода"
      />
    </div>
    <div class="form-field">
      <VDate label="Укажите дату расхода" />
    </div>
    <div class="form-field">
      <VSelect
        v-if="categories.length"
        label="Укажите категорию расхода"
        :items="categories"
        :items-label="'name'"
      />
    </div>
    <div class="form-field">
      <VButton @click="createCategory">
        Создать расход
      </VButton>
    </div>
  </VForm>
</template>

<script>
import { mapGetters } from 'vuex'
import VInput from '@/components/ui/VInput'
import VButton from '@/components/ui/VButton'
import VDate from '@/components/ui/VDate'
import VSelect from '@/components/ui/VSelect'
import VForm from '@/components/ui/VForm'

export default {
  name: 'CreateCategoryForm',
  components: { VForm, VSelect, VDate, VButton, VInput },
  data () {
    return {
      categoryName: '',
      categoryColor: '#ffffff',
      error: ''
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories',
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
