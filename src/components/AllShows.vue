<template>
  <div>
    <div>
      <span>Search</span>
      <input v-model="showQuery" @keydown="searchShow" placeholder="show name" @keydown.esc="hideSearch"/>
      <button  v-if="isSearch" @click="hideSearch">Clear</button>
    </div>
    <ul class="list-clear container-category overtext" v-if="isSearch" >
      <ShowTile v-for="category in searchedShows" :key="category.id" :show="category" />
    </ul>
    <ul class="list-clear">
      <Category v-for="category in categorizedShows" :key="category.id" :category="category" />
    </ul>
  </div>
</template>

<script>

// import axios from 'axios'
import { resolveApiCall } from '../services/tvmazeApi'
// import { filterGenres } from '../services/filterGenres'
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
      categorizedShows: [],
      searchedShows: null,
      showQuery: '',
      isSearch: false,
      genresList: []
    }
  },
  mounted () {
    resolveApiCall('http://api.tvmaze.com/shows')
      .then(data => (this.shows = data))
      // .then(() => this.filterShows())
      .then(() => this.getGenres())
      .then(() => this.categorizeShows())
  },
  // watch: {
  //   shows: function () {
  //     this.filterShows()
  //   }
  // },
  methods: {
    hideSearch () {
      this.isSearch = false
      this.showQuery = ''
    },
    searchShow () {
      this.searchedShows = this.shows.filter(show => show.name.toLowerCase().includes(this.showQuery.toLowerCase()))
      this.isSearch = true
    },
    // searchShow () {
    //   resolveApiCall(`http://api.tvmaze.com/search/shows?q=${this.showQuery}`)
    //     .then(data => (this.shows = data.map(object => object.show)))
    //     .then(() => (this.isSearch = true))
    // },
    getGenres () {
      this.genresList = this.shows.reduce((acc, show) => {
        show.genres.forEach(genre => {
          if (acc.indexOf(genre) === -1) {
            acc.push(genre)
          }
        })
        return acc
      }, [])
    },
    categorizeShows () {
      this.categorizedShows = this.genresList.map(genre => {
        return { id: genre, shows: [] }
      })
      this.shows.forEach(show => {
        show.genres.forEach(genre => {
          this.categorizedShows.forEach(({ id, shows }) => {
            if (id === genre) {
              shows.push(show)
            }
          })
        })
      })
    }
    // filterShows: function () {
    //   this.categorizedShows = [
    //     { id: 'Action', shows: filterGenres(this.shows, 'Action') },
    //     { id: 'Comedy', shows: filterGenres(this.shows, 'Comedy') },
    //     { id: 'Thriller', shows: filterGenres(this.shows, 'Thriller') },
    //     { id: 'Drama', shows: filterGenres(this.shows, 'Drama') }
    //   ]
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .list-clear {
    list-style: none;
    padding: 0;
  }
  .overtext {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    border-radius: 15px;
    z-index: 2;
    position: absolute;
    background-color: rgba(55, 55, 55, 0.8);

  }
</style>
