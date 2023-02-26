<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <NuxtLink class="menu__link link" to="/categories">
          Категории
        </NuxtLink>
      </li>
      <li class="menu__item">
        <NuxtLink class="menu__link link" to="/record">
          Новая запись
        </NuxtLink>
      </li>
      <li class="menu__item">
        <NuxtLink class="menu__link link" to="/goals">
          Цели
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style lang="scss" scoped>
.menu {
  flex: 1;
  &__list {
    display: flex;
    gap: 20px;
  }

  &__link {
    @include font(18px, 24px);
  }
}
</style>
