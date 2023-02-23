<template>
  <div>
    <div v-if="userId">
      <CategoriesList />
    </div>
    <div v-else>
      Загрузка данных пользователя...
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoriesList from '@/components/CategoriesList'

export default {
  name: 'IndexPage',
  components: { CategoriesList },
  computed: {
    ...mapGetters({
      userId: 'user/userId'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
