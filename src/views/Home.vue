<template>
  <div class="home container-fluid background">
    <div class="row">
      <div class="col">
        <h1>I-Music</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <form @submit.prevent="search" class="form-group">
          <input type="text" palceholder="Artist..." v-model="query" required>
          <button type="submit" class="mx-1 btn btn-xl btn-info btn-circle"><i class="fab fa-searchengin"></i></button>
        </form>
      </div>
    </div>
    <results></results>
  </div>
</template>

<script>
  // @ is an alias to /src

  import Results from '@/components/Results.vue'
  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    methods: {
      search() {
        this.$store.dispatch('getMusicApi', this.query)
      }
    },
    components: {
      Results
    }
  }
</script>

<style>
  .btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    border-radius: 35px;
    font-size: 24px;
    line-height: 1.33;
  }


  .background {
    background-image: url('../assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    /* min-height: fit-content; */
    padding-top: 50px;
  }
</style>