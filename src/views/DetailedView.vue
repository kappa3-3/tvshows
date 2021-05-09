<template>
  <div v-if="show.name">
    <TvShow :show="show" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TvShow from '@/components/TvShow.vue'
export default {
  name: 'DetailedView',
  components: {
    TvShow
  },
  computed: {
    ...mapGetters(['getSingleShow', 'getTvShow']),
    storedShow () {
      return this.getTvShow(this.$route.params.id)
    },
    show () {
      if (!this.storedShow) {
        return this.getSingleShow
      }
      return this.storedShow
    }
  },
  methods: {
    ...mapActions(['retrieveSingleShow']),
    checkIfInStore () {
      if (!this.storedShow) {
        return this.retrieveSingleShow(this.$route.params.id)
      }
    }
  },
  mounted () {
    this.checkIfInStore()
  }
}
</script>
