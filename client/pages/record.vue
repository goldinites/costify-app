<template>
  <div class="forms">
    <CreateCategoryForm />
    <CreateCostForm />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CreateCategoryForm from '@/components/form/CreateCategoryForm'
import CreateCostForm from '@/components/form/CreateCostForm'
export default {
  name: 'Record',
  components: { CreateCategoryForm, CreateCostForm },
  computed: {
    ...mapGetters({
      userId: 'user/userId'
    })
  },
  watch: {
    userId () {
      if (this.userId) {
        this.$store.dispatch('categories/getCategories', {
          userId: this.userId
        })
      }
    }
  },
  mounted () {
    this.$store.dispatch('user/getUserData')
  }
}
</script>

<style scoped>
.forms {
  display: flex;
  justify-content: space-between;
  gap: 100px;
}
</style>
