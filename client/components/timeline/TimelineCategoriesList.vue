<template>
  <div class="timeline-categories">
    <TimelineCategory
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
    />
  </div>
</template>

<script>
import TimelineCategory from '@/components/timeline/TimelineCategory'
export default {
  name: 'TimelineCategoriesList',
  components: { TimelineCategory },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-categories {
  display: flex;
  flex-direction: column;
  border: 1px solid $border_color;
  border-radius: 10px;
  overflow: hidden;
}
</style>
