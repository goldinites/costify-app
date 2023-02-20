<template>
  <div class="header">
    <div class="container">
      <div class="header__row">
        <div class="logo">
          <NuxtLink class="logo__link" to="/">
            Costify
          </NuxtLink>
        </div>
        <MainMenu />
        <Search />
        <User />
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'
import Search from '~/components/Search.vue'
import User from '~/components/User.vue'

export default {
  name: 'TheHeader',
  components: { User, Search, MainMenu }
}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 35px;

  &__row {
    display: flex;
    align-items: center;
    gap: 75px;
  }
}

.logo {
  &__link {
    @include font(25px, 35px);
    color: $font_color;
  }
}
</style>
