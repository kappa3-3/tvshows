<template>
  <div>
    <div>
      <span>Search</span>
      <input v-model="showQuery" @keyup="searchShow" placeholder="show name" @keydown.esc="hideSearch"/>
      <button  v-if="isSearch" @click="hideSearch">Clear</button>
    </div>
    <ul class="list-clear container-category overtext" v-if="isSearch" >
      <ShowTile v-for="category in searchedShows" :key="category.id" :show="category" />
    </ul>
    <ul class="list-clear">
      <Category v-for="category in getCategorisedShows" :key="category.id" :category="category" />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
      searchedShows: null,
      showQuery: '',
      isSearch: false
    }
  },
  computed: {
    ...mapGetters(['getTvShows', 'getCategorisedShows'])
  },
  methods: {
    ...mapActions(['retrieveAllShows']),
    hideSearch () {
      this.isSearch = false
      this.showQuery = ''
    },
    searchShow () {
      this.isSearch = true
      this.searchedShows = this.getTvShows.filter(({ name }) => new RegExp(this.showQuery, 'i').test(name))
      if (this.showQuery.length === 0) {
        this.isSearch = false
      }
      if (this.searchedShows.length === 0) {
        this.isSearch = false
      }
    }
  },
  mounted () {
    this.retrieveAllShows()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/colors.scss';
  .list-clear {
    list-style: none;
    padding: 0;
  }
  .overtext {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;
    padding: 15px;
    border-radius: 15px;
    z-index: 2;
    position: absolute;
    background-color: $grey-opacity;
  }
</style>
