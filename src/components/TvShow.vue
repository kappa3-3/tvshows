<template>
  <div class="tvshow-container">
    <img :src="show.image.original" :alt="show.name" class="tvshow-background">
    <div class="tvshow-desc">
      <h1>{{show.name}}</h1>
      <div class="tvshow-genre">
        <span class="tvshow-bold">✭ {{show.rating.average}}</span>
        <span v-for="genre in show.genres" :key="genre" > {{genre}} | </span>
        <p>
          <span> Original Language: </span>
          <span class="tvshow-bold"> {{show.language}} </span>
          <span> Runtime: </span>
          <span class="tvshow-bold"> {{show.runtime}} min</span>
        </p>
      </div>
      <div v-html="show.summary" class="tvshow-summary"/>
      <a v-if="show.officialSite" :href="show.officialSite" target="_blank" class="tvshow-redirect">
        Go to the official website
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TvShow',
  props: {
    show: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/colors.scss';
 .tvshow-container {
   display: flex;
   position: relative;
   overflow: hidden;
 }
 .tvshow-desc {
   display: flex;
   flex-direction: column;
   padding: 25px 25px 45px;
   color: $white;
   background-color: $grey-opacity;
 }
 .tvshow-background {
   position: absolute;
   pointer-events: none;
   z-index: -1;
   width: 100%;
   height: 100%;
   object-fit: cover;
 }

 .tvshow-genre {
   font-size: 12px;
   font-weight: 300;
 }
 .tvshow-bold {
   font-size: 14px;
   font-weight: 700;
 }
 .tvshow-redirect {
   color: $accent;
   text-decoration: none;
   &:hover {
     color: $accent-pop;
   }
 }
</style>
