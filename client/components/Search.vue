<template>
  <div class="search">
    <input class="search__input input" type="text">
    <button class="search__button">
      <svg-icon name="search" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  border: 1px solid $border_color;
  background-color: $glass_bg;
  border-radius: 5px;
  transition: .5s;
  &:hover {
    @include hover_slide_effect;
  }
  &__input {
    display: block;
    background-color: transparent;
    padding: 5px 10px;
    color: #fff;
  }
  &__button {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    padding: 5px;

    & svg {
      @include icon_size(30px, 30px);
      fill: #fff;
    }
  }
}
</style>
