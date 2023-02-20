<template>
  <div class="user" @mouseenter="showOptionsHandler" @mouseleave="hideOptionsHandler">
    <div class="user__icon">
      <svg-icon name="person" />
    </div>
    <div v-show="showOptions" class="user__options">
      <ul class="user__options-list">
        <li class="user__options-item">
          <NuxtLink class="user__options-link" to="/settings">
            Настройки
          </NuxtLink>
        </li>
        <li class="user__options-item">
          <NuxtLink class="user__options-link" to="/">
            Выйти
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      showOptions: false
    }
  },
  methods: {
    showOptionsHandler () {
      this.showOptions = true
    },
    hideOptionsHandler () {
      this.showOptions = false
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  position: relative;

  &__icon {
    cursor: pointer;

    & svg {
      fill: #fff;
      @include icon_size(35px, 35px);
    }
  }

  &__options {
    background-color: $glass_bg;
    border: 1px solid $border_color;
    position: absolute;
    top: 100%;
    left: -50%;
    border-radius: 5px;
    transition: .5s;

    &:hover {
      @include hover_slide_effect;
    }

    &-link {
      display: block;
      padding: 10px 15px;
      color: $font_color;
    }
  }
}
</style>
