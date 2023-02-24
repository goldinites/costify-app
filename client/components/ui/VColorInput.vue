<template>
  <div class="color-picker">
    <label :for="id">Цвет категории</label>
    <input :id="id" v-model="color" type="color" @input="$emit('input', color)">
  </div>
</template>

<script>
import { randomString, randomHex } from '@/helpers/utils'

export default {
  name: 'VColorInput',
  data () {
    return {
      color: '',
      id: ''
    }
  },
  watch: {
    color () {
      this.$emit('input', this.color)
    }
  },
  mounted () {
    this.id = randomString()
    this.color = randomHex()
  }
}
</script>

<style lang="scss" scoped>
.color-picker {
  display: flex;
  align-items: center;
  gap: 12px;
  & label {
    color: $white;
    @include font(17px, 23px);
  }
  & input {
    -webkit-appearance: none;
    border: 2px solid $white;
    background: $white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border: none;
      border-radius: 50%;
    }

    &::-moz-focus-inner {
      border: none;
      padding: 0;
      border-radius: 50%;
    }

    &::-moz-color-swatch {
      border: none;
      border-radius: 50%;
    }
  }
}
</style>
