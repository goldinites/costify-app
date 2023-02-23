<template>
  <div class="v-input">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      :type="inputType"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @keydown.enter="$emit('enter', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
import { randomString } from '~/helpers/utils'

export default {
  name: 'VInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputId () {
      return randomString(10)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-input {
  display: flex;
  flex-direction: column;
  gap: 7px;

  & input {
    display: block;
    border: 1px solid $border_color;
    background-color: $glass_bg;
    transition: .4s;
    color: $white;
    padding: 10px 15px;
    border-radius: 5px;
    &:hover, &:focus {
      @include hover_slide_effect;
    }
  }

  & label {
    color: $white;
    @include font(17px, 23px);
  }
}
</style>
