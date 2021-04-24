<script>
  import { onMount } from "svelte"
  import { counter } from "../agent"
  let count = 0

  const refreshCounter = async () => {
    const res = await counter.getValue()
    count = res.toString()
  }

  const increment = async () => {
    await counter.increment()
    refreshCounter()
  }

  onMount(refreshCounter)
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style>
  button {
    font-size: calc(10px + 2vmin);
    background: linear-gradient(237.86deg, #532885 -20%, #ee1f7a 124%);
    padding: 0 2em;
    border-radius: 60px;
    font-size: 0.7em;
    line-height: 40px;
    outline: 0;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 900;
    color: white;
  }
</style>
