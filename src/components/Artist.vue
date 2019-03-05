<template>

  <div class="col-4 artist">
    <h1>Artist Songs</h1>
    <ol>
      <li v-for="song in songs" @click="setActiveSong(song)">{{song.title}}</li>
    </ol>
  </div>

</template>


<script>
  import SongView from '@/components/Song.vue'
  export default {
    name: 'Artist',
    props: ['artist'],
    data() {
      return {

      }
    },
    computed: {
      songs() {
        return this.$store.state.results[this.artist] || {}
      }

    },
    methods: {
      setActiveSong(song) {
        this.$store.dispatch('changeActiveSong', song)
      }
    },

    components: {
      SongView
    }
  }
</script>

<style>
  .artist {
    background-color: rgba(189, 192, 196, 0.564);
    border: 2px solid rgb(86, 110, 138);
    overflow-y: scroll;
  }
</style>