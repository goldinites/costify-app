<template>
  <div class="timeline-category">
    <div class="timeline-category__name" @click="isOpen = !isOpen">
      {{ category?.name }}
    </div>
    <div v-if="category.costs.length && isOpen" class="timeline-category__items">
      <div v-for="(cost, index) in category.costs" :key="index" class="timeline-category__item">
        {{ cost.name }}
        <br>
        {{ cost.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineCategory',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>

</style>
