<template>
  <div class="timeline-category">
    <div class="timeline-category__name" @click="isOpen = !isOpen">
      {{ category.name }}
    </div>
    <div v-if="isOpen" class="timeline-category__items">
      <div class="timeline-category__items-properties">
        <div class="timeline-category__items-property">
          Название
        </div>
        <div class="timeline-category__items-property">
          Дата
        </div>
        <div class="timeline-category__items-property">
          Стоимость
        </div>
      </div>
      <div v-for="(cost, index) in category.costs" :key="index" class="timeline-category__item">
        <div class="timeline-category__item-property">
          {{ cost.name }}
        </div>
        <div class="timeline-category__item-property">
          {{ cost.date }}
        </div>
        <div class="timeline-category__item-property">
          {{ cost.value }}
        </div>
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

<style lang="scss" scoped>
.timeline-category {
  &__name {
    padding: 10px;
    border: 1px solid;
  }
  &__items {
    border: 1px solid;
    border-top: none;
    padding: 10px;
    &-properties {
      display: flex;
      margin-bottom: 7px;
      padding-bottom: 7px;
      border-bottom: 1px solid;
    }
    &-property {
      flex: 1;
    }
  }
  &__item {
    display: flex;
    padding-bottom: 7px;
    margin-bottom: 7px;
    border-bottom: 1px solid;
    &-property {
      flex: 1;
    }
  }
}
</style>
