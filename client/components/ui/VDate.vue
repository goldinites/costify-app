<template>
  <div class="date-picker">
    <span v-if="label" class="date-picker__label">{{ label }}</span>
    <date-picker v-model="date" :format="format" :value-type="format" />
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/locale/ru'

export default {
  name: 'VDate',
  components: {
    DatePicker
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      date: '',
      format: 'DD.MM.YYYY'
    }
  },
  watch: {
    date () {
      this.$emit('date-selected', this.date)
    }
  },
  mounted () {
    this.date = new Intl.DateTimeFormat('ru').format(new Date())
  }
}
</script>

<style lang="scss" scoped>
@import "vue2-datepicker/index.css";

.date-picker {
  display: flex;
  flex-direction: column;
  gap: 7px;

  &__label {
    color: $white;
    @include font(17px, 23px);
  }

  & .mx-datepicker {
    display: block;
    width: 100%;
  }

  &:deep(.mx-input) {
    border: 1px solid $border_color;
    background-color: $glass_bg;
    color: $font_color;
  }
  &:deep(.mx-icon-calendar), &:deep(.mx-icon-clear) {
    color: #fff;
  }
}
</style>
