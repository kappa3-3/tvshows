<template>
  <li >
    <h1 class="category-title">{{category.id}}</h1>
    <ul class="container-category list-clear">
      <ShowTile v-for="show in sortedCategory" :key="show.id" :show="show"/>
      <!-- <li class="position-fixed">
        <button class="button-left" @click="scrollRight">LESS</button>
        <button class="button-left"  @click="scrollLeft"> more </button>
      </li> -->
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
    scrollLeft: function (event) {
      // const value = event.path[2].scrollLeft
      event.path[2].scrollLeft += 500
    },
    scrollRight: function (event) {
      event.path[2].scrollLeft -= 500
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .container-category {
    display: flex;
    overflow-x: scroll;
    // overflow: hidden;
    scroll-behavior: smooth;
    // position: relative;
  }
  .position-fixed {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 30px 20px 20px;
    box-sizing: border-box;
    position: fixed;
  }
  .category-title{
    text-align: start;
    background-color: #323444;
    color: whitesmoke;
    padding: 8px;
    padding-left: 25px;
    border-radius: 15px;
  }
  // .button-left {
  //   background-color: transparent;
  //   height: 180px;
  //   text-orientation: upright;
  // }
</style>
