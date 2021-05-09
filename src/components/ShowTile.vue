<template>
  <li class="tile-container">
    <router-link name="tvshow" :to="`tvshow/${show.id}`" class="tile-redirect">
      <img :src="show.image.medium" :alt="show.name" class="show-image">
      <div class="tile-desc-container">
        <span class="tile-rating">✭ {{show.rating.average}}</span>
        <span class="tile-title">{{show.name}}</span>
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
@import '../assets/colors.scss';
.show-image {
  width: 150px;
}
.tile-container {
  margin: 3px;
  background-color: $white;
  border-radius: 10px;
}
.tile-desc-container {
  padding: 8px;
}
.tile-title {
  display: block;
  max-width: fit-content;
  text-align: left;
  color: $accent-dark-grey;
  font-size: 14px;
  font-weight: 700;
}
.tile-redirect {
  text-decoration: none;
}
.tile-rating {
  font-weight: 700;
  min-width: 40px;
  font-size: 12px;
  color: $accent-vivid;
  float: right;
}
</style>
