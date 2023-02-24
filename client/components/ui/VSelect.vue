<template>
  <div class="select">
    <span class="select__label">{{ label }}</span>
    <VueSelect v-model="selectedValue" :label="itemsLabel" :options="items" />
  </div>
</template>

<script>
import { VueSelect } from 'vue-select'
export default {
  name: 'VSelect',
  components: {
    VueSelect
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    itemsLabel: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedValue: {}
    }
  },
  watch: {
    selectedValue () {
      this.$emit('select', this.selectedValue)
    }
  },
  mounted () {
    this.selectedValue = this.items[0]
  }
}
</script>

<style lang="scss" scoped>
@import "vue-select/dist/vue-select.css";
.select {
  display: flex;
  flex-direction: column;
  gap: 7px;

  &__label {
    color: $white;
    @include font(17px, 23px);
  }

  &:deep(.vs__dropdown-toggle) {
    background: $glass_bg;
    color: $white;
  }
  &:deep(.vs--single .vs__selected) {
    color: $white;
  }
}
</style>
