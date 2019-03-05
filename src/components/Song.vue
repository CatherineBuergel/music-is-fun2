<template>
  <div class="song col-4">
    <h1>Song</h1>
    <div class="card text-center">
      <img :src="song.albumArt">
      <div class="card-body">
        <h5>{{song.title}}</h5>
        <h6>{{song.artist}}</h6>
        <audio controls :src="song.preview"></audio>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Song',

    data() {
      return {
      }
    },
    computed: {
      song() {
        return this.$store.state.activeSong
      }
    },
    methods: {}
  }
</script>

<style>
  .song {
    background-color: rgba(189, 192, 196, 0.564);
    border: 2px solid rgb(86, 110, 138);
  }
</style>