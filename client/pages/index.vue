<template>
  <div>
    <div v-if="userId">
      <TimelineCosts />
    </div>
    <div v-else>
      Загрузка данных пользователя...
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TimelineCosts from '@/components/TimelineCosts'

export default {
  name: 'IndexPage',
  components: { TimelineCosts },
  computed: {
    ...mapGetters({
      userId: 'user/userId'
    })
  }

}
</script>

<style lang="scss" scoped>

</style>
