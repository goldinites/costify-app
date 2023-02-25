<template>
  <div>
    <div v-if="userId">
      <TimelineCosts v-if="hasRecords" />
      <div v-else>
        Добавьте категорию и расходы
      </div>
    </div>
    <div v-else>
      Загрузка данных пользователя...
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TimelineCosts from '@/components/timeline/TimelineCosts'

export default {
  name: 'IndexPage',
  components: { TimelineCosts },
  computed: {
    ...mapGetters({
      userId: 'user/userId',
      hasRecords: 'user/hasRecords'
    })
  }

}
</script>

<style lang="scss" scoped>

</style>
