<template>
  <div>
    <div>
      <span>Search</span>
      <input v-model="showQuery" placeholder="show name"/>
      <button @click="searchShow">Go</button>
    </div>
    <div v-if="isSearch">
      <ShowTile v-for="category in shows" :key="category.id" :show="category" />
    </div>
    <ul class="list-clear" v-else>
      <Category v-for="category in categorizedShows" :key="category.id" :category="category" />
    </ul>
  </div>
</template>

<script>

// import axios from 'axios'
import { resolveApiCall } from '../services/tvmazeApi'
import { filterGenres } from '../services/filterGenres'
import Category from '@/components/Category.vue'
import ShowTile from '@/components/ShowTile.vue'
export default {
  name: 'AllShows',
  components: {
    Category,
    ShowTile
  },
  data () {
    return {
      shows: null,
      categorizedShows: null,
      showQuery: '',
      isSearch: false
    }
  },
  mounted () {
    resolveApiCall('http://api.tvmaze.com/shows')
      .then(data => (this.shows = data))
      .then(() => this.filterShows())
  },
  // watch: {
  //   shows: function () {
  //     this.filterShows()
  //   }
  // },
  methods: {
    searchShow () {
      resolveApiCall(`http://api.tvmaze.com/search/shows?q=${this.showQuery}`)
        .then(data => (this.shows = data.map(object => object.show)))
        .then(() => (this.isSearch = true))
    },
    filterShows: function () {
      this.categorizedShows = [
        { id: 'Action', shows: filterGenres(this.shows, 'Action') },
        { id: 'Comedy', shows: filterGenres(this.shows, 'Comedy') },
        { id: 'Thriller', shows: filterGenres(this.shows, 'Thriller') },
        { id: 'Drama', shows: filterGenres(this.shows, 'Drama') }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .list-clear {
    list-style: none;
  }
</style>
