<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
  import Navbar from '@/components/navbar'

  export default {
    name: 'Main',
    backend: 'http://127.0.0.1:80/Personal/apistore/backend/controllers/index.php',
    components: {
      Navbar
    },
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
