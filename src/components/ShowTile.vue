<template>
  <li>
    <router-link :to="`tvshows/${show.id}`">
      <img :src="show.image.medium" :alt="show.name" class="show-image">
      <div>
        <span>{{show.name}}</span>
        <span>{{show.rating.average}}</span>
      </div>
    </router-link>
  </li>
</template>

<script>

export default {
  name: 'ShowTile',
  props: {
    show: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.show-image {
  width: 20vw;
}
</style>
