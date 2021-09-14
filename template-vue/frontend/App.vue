<template>
  <div class="App">
    <Auth />
    <Intro />
  </div>
</template>

<script>
import Intro from "./Intro.vue"
import Auth from "./Auth.vue"

export default {
  name: "App",
  components: {
    Intro,
    Auth,
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-weight: 600;
}

.App {
  text-align: center;
}
</style>
