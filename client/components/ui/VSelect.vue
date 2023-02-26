<template>
  <div class="vselect">
    <span class="vselect__label">{{ label }}</span>
    <VueSelect
      v-model="selectedValue"
      :label="itemsLabel"
      :options="items"
      :clearable="clearable"
      :searchable="searchable"
    />
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
    },
    beginSelected: {
      type: Object,
      required: true
    },
    clearable: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: false
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
    this.selectedValue = this.beginSelected
  }
}
</script>

<style lang="scss" scoped>
@import "vue-select/dist/vue-select.css";
.vselect {
  //display: flex;
  //flex-direction: column;
  //gap: 7px;

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
