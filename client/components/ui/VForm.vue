<template>
  <form class="form" @submit.prevent="$emit('submit')">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'VForm'
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  background-color: $glass_bg;
  border: 1px solid $border_color;
  padding: 12px;
  border-radius: 12px;
  transition: .4s;
  &:hover {
    @include hover_slide_effect;
  }
}
</style>
