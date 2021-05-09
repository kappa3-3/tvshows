<template>
  <li class="position-relative">
    <button class="button-left" @click="scrollRight">
      &lt;&lt;
    </button>
    <button class="button-right"  @click="scrollLeft">
      &gt;&gt;
    </button>
    <h1 class="category-title">{{category.id}}</h1>
    <ul :id="category.id" class="container-category list-clear">
      <ShowTile v-for="show in sortedCategory" :key="show.id" :show="show"/>
    </ul>
  </li>
</template>

<script>

import ShowTile from '@/components/ShowTile.vue'
export default {
  name: 'Category',
  components: {
    ShowTile
  },
  props: {
    category: Object
  },
  data: function () {
    return {
      sortedCategory: this.sortShows(this.category.shows)
    }
  },
  methods: {
    sortShows: function (array) {
      return array.sort((a, b) => b.rating.average - a.rating.average)
    },
    scrollLeft: function () {
      const categoryList = document.getElementById(this.category.id)
      categoryList.scrollLeft += window.innerWidth * 0.8
    },
    scrollRight: function () {
      const categoryList = document.getElementById(this.category.id)
      categoryList.scrollLeft -= window.innerWidth * 0.8
    }
  }
}
</script>

<style lang="scss">
@import '../assets/colors.scss';
@import '../assets/mixins.scss';
  .container-category {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    @media (hover: none) {
      overflow-x: scroll;
    }
  }
  .position-relative {
    position: relative;
  }
  .category-title{
    text-align: start;
    background-color: $accent-dark-grey;
    color: $white;
    padding: 5px;
    padding-left: 20px;
    border-radius: 15px;
    font-size: 14px;
    line-height: 20px;
  }
  .button-left {
    @include buttonScroll(10px, unset);
  }
  .button-right {
    @include buttonScroll(unset, 15px);
  }
</style>
