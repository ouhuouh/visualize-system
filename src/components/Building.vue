<template>
  <div class="building">
    <h2>{{ this.name }}</h2>
    <p>temperature: {{ this.temp }}</p>
  </div>
</template>

<script>
  export default {
    name: "Building",
    props: {
      name: String,
      temp: Number
    }
  }
</script>

<style scoped>
.building {
  border: solid 1px black;
}
</style>
