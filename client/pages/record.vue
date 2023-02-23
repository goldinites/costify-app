<template>
  <div class="forms">
    <CreateCategoryForm />
    <CreateCostForm />
  </div>
</template>

<script>
import CreateCategoryForm from '@/components/form/CreateCategoryForm'
import CreateCostForm from '@/components/form/CreateCostForm'
export default {
  name: 'Record',
  components: { CreateCategoryForm, CreateCostForm }
}
</script>

<style scoped>
.forms {
  display: flex;
  justify-content: space-between;
  gap: 100px;
}
</style>
