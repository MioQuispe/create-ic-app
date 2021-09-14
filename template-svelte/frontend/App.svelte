<script>
  import Intro from "./Intro.svelte"
  import Auth from "./Auth.svelte"
</script>

<div class="App">
  <Auth />
  <Intro />
</div>

<style global>
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
