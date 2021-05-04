<template>
  <div>
    <span>Search</span>
    <input v-model="showQuery" placeholder="show name"/>
    <button @click="searchShow">Go</button>
  </div>
</template>

<script>

import { resolveApiCall } from '../services/tvmazeApi'
export default {
  name: 'SearchShow',
  data () {
    return {
      shows: null
    }
  },
  methods: {
    searchShow () {
      resolveApiCall(`http://api.tvmaze.com/search/shows?q=${this.showQuery}`).then(data => (this.shows = data))
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
