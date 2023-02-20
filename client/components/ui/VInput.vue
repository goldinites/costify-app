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

<style scoped>

</style>
