<template>
  <div
    v-if="showPagination"
    class="pagination"
  >
    <ul class="pagination__list">
      <li
        v-if="!isFirstPage"
        class="pagination__item pagination__item--double-left"
        @click="setFirstPage"
      >
        «
      </li>
      <li
        v-if="!isFirstPage"
        class="pagination__item  pagination__item--left"
        @click="setPrevPage"
      >
        ‹
      </li>
      <li
        v-for="page in pagesCount"
        :key="page"
        class="pagination__item"
        :class="{'pagination__item--active' : (page === currentPage)}"
        @click="setPage(page)"
      >
        {{ page }}
      </li>
      <li
        v-if="!isLastPage"
        class="pagination__item pagination__item--right"
        @click="setNextPage"
      >
        ›
      </li>
      <li
        v-if="!isLastPage"
        class="pagination__item pagination__item--double-right"
        @click="setLastPage"
      >
        »
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VPagination',
  props: {
    elements: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    pagesCount () {
      return Math.ceil(this.elements / this.limit)
    },
    showPagination () {
      return this.pagesCount > 1
    },
    isFirstPage () {
      return this.currentPage === 1
    },
    isLastPage () {
      return this.currentPage === this.pagesCount
    },
    paginationData () {
      return {
        page: this.currentPage,
        limit: this.limit,
        offset: (this.currentPage * this.limit) - this.limit
      }
    }
  },
  methods: {
    setFirstPage () {
      this.currentPage = 1
      this.$emit('change-page', this.paginationData)
    },
    setPrevPage () {
      this.currentPage--
      this.$emit('change-page', this.paginationData)
    },
    setPage (page) {
      this.currentPage = page
      this.$emit('change-page', this.paginationData)
    },
    setNextPage () {
      this.currentPage++
      this.$emit('change-page', this.paginationData)
    },
    setLastPage () {
      this.currentPage = this.pagesCount
      this.$emit('change-page', this.paginationData)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  user-select: none;
  &__list {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E4EBF5;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;
    border-radius: 8px;
    width: 45px;
    height: 45px;
    color: #6a7ecc;
    cursor: pointer;
    font-size: 25px;
    &--active {
      opacity: 1;
      box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #fff;
      color: #2fd790;
      cursor: default;
    }
    &--left {
      position: absolute;
      left: -55px;
    }
    &--double-left {
      position: absolute;
      left: -110px;
    }
    &--right {
      position: absolute;
      right: -55px;
    }
    &--double-right {
      position: absolute;
      right: -110px;
    }
  }
}
</style>
