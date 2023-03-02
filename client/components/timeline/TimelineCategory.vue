<template>
  <div class="timeline-category">
    <div
      class="timeline-category__name"
      :class="{'timeline-category__name--active': isOpen}"
      @click="toggleCategory"
    >
      <span>
        Категория: {{ name }}
      </span>
    </div>
    <Transition>
      <div
        v-if="isOpen"
        class="timeline-category__items"
      >
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
        <div class="timeline-category__items-list">
          <div
            v-for="(cost, index) in costs"
            :key="index"
            class="timeline-category__item"
          >
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
    </Transition>
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
  },
  computed: {
    name () {
      return this.category.name
    },
    costs () {
      return this.category.costs
    }
  },
  methods: {
    toggleCategory () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-category {
  border-bottom: 1px solid $border_color;
  &:last-child {
    border-bottom: none;
  }

  &__name {
    position: relative;
    padding: 10px;
    cursor: pointer;
    overflow: hidden;
    & span {
      position: relative;
    }
    &:hover {
      background: $glass_bg;
    }
    &--active {
      background: $glass_bg;
      & span {
        font-weight: 700;
        color: $white;
      }
      &:before {
        transform: scaleY(1);
      }
    }
  }
  &__items {
    animation: show 0.5s;
    &-properties {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid $border_color;
    }
    &-property {
      flex: 1;
    }
    &-list {
      max-height: 300px;
      overflow: hidden scroll;
      &::-webkit-scrollbar {
        width: 4px;
        background-color: #f2f2f2;
        border-radius: 2px;
      }
      &::-webkit-scrollbar-thumb {
        background: $dark_blue;
        border-radius: 2px;
      }
    }
  }
  &__item {
    display: flex;
    padding: 0 10px;
    border-bottom: 1px solid $border_color;
    &:last-child {
      border-bottom: none;
    }
    &-property {
      flex: 1;
      padding: 10px 0;
    }
  }
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
