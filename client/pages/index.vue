<template>
  <div>
    <div v-if="userId">
      <TimelineCosts v-if="hasRecords" />
      <div v-else>
        <h2 style="font-size: 72px; line-height: 100px;">
          Для отображения графика,
          <NuxtLink class="link" to="/record" style="font-family: 'Merriweather'">
            создайте категорию или расходы
          </NuxtLink>
        </h2>
      </div>
    </div>
    <div v-else>
      <h2>Загрузка данных пользователя...</h2>
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
  },
  mounted () {
    this.$store.dispatch('user/getUserData')
  }
}
</script>

<style lang="scss" scoped>

</style>
