<template>
  <div class="color-picker">
    <label :for="id">Цвет категории</label>
    <input :id="id" v-model="color" type="color" @input="$emit('input', color)">
  </div>
</template>

<script>
import { randomString } from '@/helpers/utils'

export default {
  name: 'VColorInput',
  components: {
  },
  data () {
    return {
      color: '#fff'
    }
  },
  computed: {
    id () {
      return randomString()
    }
  }
}
</script>
