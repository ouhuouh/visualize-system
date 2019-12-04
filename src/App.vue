<template>
  <div id="app">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>

<style>
body, html {
  height: 100vh;
  width: 100vw;
  min-height: 100%;
  /*overflow: hidden;*/
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  height: 100%;
  /*overflow: scroll;*/
  font-family: 'Barlow', sans-serif;

}

@import url('https://fonts.googleapis.com/css?family=Barlow:300&display=swap');
</style>
