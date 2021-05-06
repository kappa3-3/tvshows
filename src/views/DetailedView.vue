<template>
  <div>
    <TvShow :show="show" />
  </div>
</template>

<script>
import TvShow from '@/components/TvShow.vue'
import { resolveApiCall } from '../services/tvmazeApi'
export default {
  name: 'DetailedView',
  components: {
    TvShow
  },
  data () {
    return {
      show: { name: '', image: '', rating: { average: '' } }
    }
  },
  mounted () {
    resolveApiCall(`http://api.tvmaze.com/shows/${this.$route.params.id}`).then(data => (this.show = data))
  }
}
</script>
