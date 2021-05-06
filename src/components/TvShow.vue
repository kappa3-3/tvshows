<template>
  <div class="tvshow-container">
    <img :src="show.image.original" :alt="show.name" class="tvshow-background">
    <div class="tvshow-desc">
      <h1>{{show.name}}</h1>
      <div>
      <p>
        <span>✭ {{show.rating.average}}</span>
        <span v-for="genre in show.genres" :key="genre" class="tvshow-genre"> | {{genre}}</span>
      </p>
      </div>
      <div v-html="show.summary" class="tvshow-summary"/>
      <a :href="show.officialSite" target="_blank" class="tvshow-redirect">
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
      required: true
    }
  }
}
</script>

<style lang="scss">
 .tvshow-container {
   display: flex;
   position: relative;
   overflow: hidden;
 }
 .tvshow-desc {
   display: flex;
   flex-direction: column;
   padding: 25px 25px 45px;
   color: white;
   background-color: rgba(33, 32, 39, 0.75);
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
 .tvshow-redirect {
   color: rgb(190, 149, 11);
   text-decoration: none;
 }
</style>
