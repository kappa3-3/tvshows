<template>
<div>
  <div>TvShow page with prop id: {{ id }}</div>
  <TvShow :id="id" />
</div>
</template>
<script>
import TvShow from '../components/TvShow'
export default {
  components: {
    TvShow
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
