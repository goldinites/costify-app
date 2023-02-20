<template>
  <div
    v-click-outside="searchUnfocusHandler"
    class="search"
    :class="{'in-focus' : searchFocus}"
    @click="searchFocusHandler"
  >
    <VInput
      v-model="searchString"
      class="search__input input"
      :input-type="'text'"
      :placeholder="'Поиск'"
    />
    <button class="search__button">
      <svg-icon name="search" />
    </button>
  </div>
</template>

<script>
import VInput from '@/components/ui/VInput'
export default {
  name: 'Search',
  components: { VInput },
  data () {
    return {
      searchString: '',
      searchFocus: false
    }
  },
  methods: {
    searchFocusHandler () {
      this.searchFocus = true
    },
    searchUnfocusHandler () {
      this.searchFocus = false
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  border: 1px solid $border_color;
  background-color: $glass_bg;
  border-radius: 5px;
  transition: .5s;
  overflow: hidden;
  &:hover, &.in-focus {
    @include hover_slide_effect;
  }
  &__input {
    &:deep(input) {
      display: block;
      background: transparent;
      height: 100%;
      padding: 5px 10px;
      color: $white;
      &::placeholder {
        color: $white;
      }
    }
  }
  &__button {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    padding: 5px;
    transition: .3s;

    &:hover {
      & svg {
        transform: scale(1.1);
      }
    }

    & svg {
      transition: .3s;
      @include icon_size(30px, 30px);
      fill: #fff;
    }
  }
}
</style>
