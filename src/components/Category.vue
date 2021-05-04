<template>
  <li>
    <h1>{{category.id}}</h1>
      <ul class="container-category list-clear">
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .container-category {
    width: 100vw;
    display: flex;
    // flex-wrap: wrap;
    overflow-x: scroll;
    // height: 300px;
  }
</style>
