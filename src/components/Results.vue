<template>
  <div class="row">
    <div class="col-4 results">
      <h1>Results</h1>
      <ol>
        <li v-for="artist in artists" @click="setActiveArtist(artist)">
          {{artist}}
        </li>
      </ol>
    </div>
    <Artist-view :artist='activeArtist'></Artist-view>
    <song-view></song-view>

  </div>
</template>

<script>
  import ArtistView from '@/components/Artist.vue'
  import SongView from '@/components/Song.vue'
  export default {
    name: 'Results',
    data() {
      return {
        activeArtist: {}
      }
    },
    computed: {
      artists() {
        let artists = Object.keys(this.$store.state.results)
        return artists
      }
    },
    methods: {
      setActiveArtist(artist) {
        this.activeArtist = artist
      }
    },
    components: {
      ArtistView,
      SongView
    }
  }

</script>

<style>
  .results {
    background-color: rgba(189, 192, 196, 0.564);
    border: 2px solid rgb(86, 110, 138);
    overflow-y: scroll;
  }
</style>