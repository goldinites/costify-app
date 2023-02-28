<template>
  <VForm @submit="createCost">
    <h3 class="form-title">
      Добавить расход
    </h3>
    <div class="form-field">
      <VInput
        v-model="costName"
        placeholder="Название расхода"
        label="Введите название расхода"
      />
    </div>
    <div class="form-field">
      <VInput
        v-model="costValue"
        input-type="number"
        placeholder="Стоимость расхода"
        label="Введите стоимость расхода"
      />
    </div>
    <div class="form-field">
      <VDate
        v-model="costDate"
        label="Укажите дату расхода"
        @date-selected="selectDateHandler($event)"
      />
    </div>
    <div class="form-field">
      <div class="select">
        <VueSelect
          v-if="categories.length"
          v-model="costCategory"
          :options="categories"
          label="name"
          :searchable="true"
          :clearable="false"
          @input="selectCategoryHandler"
        />
      </div>
    </div>
    <div class="form-field">
      <VButton>
        Добавить расход
      </VButton>
    </div>
  </VForm>
</template>

<script>
import { mapGetters } from 'vuex'
import { VueSelect } from 'vue-select'
import VInput from '@/components/ui/VInput'
import VButton from '@/components/ui/VButton'
import VDate from '@/components/ui/VDate'
import VForm from '@/components/ui/VForm'

export default {
  name: 'CreateCostForm',
  components: { VForm, VueSelect, VDate, VButton, VInput },
  data () {
    return {
      costName: '',
      costValue: '',
      costDate: '',
      costCategory: ''
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories',
      userId: 'user/userId'
    })
  },
  watch: {
    categories () {
      this.costCategory = this.categories[0]
    }
  },
  mounted () {
    this.costCategory = this.categories[0]
  },
  methods: {
    createCost () {
      const costData = {
        name: this.costName,
        value: this.costValue,
        categoryId: this.costCategory.id,
        userId: this.userId,
        date: this.costDate
      }
      this.$store.dispatch('costs/createCost', costData)
    },
    selectCategoryHandler (event) {
      this.costCategory = event
    },
    selectDateHandler (event) {
      this.costDate = event
    }
  }
}
</script>
