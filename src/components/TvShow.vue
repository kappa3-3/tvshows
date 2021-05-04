<template>
  <div class="tvshow-container">
    <img :src="show.image.medium" :alt="show.name">
    <div class="tvshow-desc">
      <h1>{{show.name}}</h1>
      <p>Rating: {{show.rating.average}}</p>
      <div v-html="show.summary"></div>
      <a :href="show.officialSite" target="_blank">Go to official website</a>
    </div>
  </div>
</template>

<script>
import { resolveApiCall } from '../services/tvmazeApi'
export default {
  data () {
    return {
      show: null
    }
  },
  mounted () {
    resolveApiCall(`http://api.tvmaze.com/shows/${this.$route.params.id}`)
      .then(data => (this.show = data))
  }
}
</script>

<style lang="scss">
 .tvshow-container {
   display: flex;
   flex-wrap: wrap;
  //  flex-direction: column;
 }
 .tvshow-desc {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   max-width: 350px;
   padding: 20px;
 }
</style>
