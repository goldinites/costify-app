<template>
  <button class="v-button" :type="type" @click="$emit('click')">
    <span>
      <slot />
    </span>
  </button>
</template>
<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'submit'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-button {
  position: relative;
  border: 1px solid $border_color;
  background-color: $glass_bg;
  color: $white;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 12px;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    inset: 0 0 0 -100%;
    background: $default-gradient;
    z-index: -1;
    transition: .3s;
  }
  &:hover {
    &:after {
      inset: 0 -100% 0 0;
    }
  }
  & span {
    position: relative;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
