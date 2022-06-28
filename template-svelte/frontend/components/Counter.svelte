<script>
  import { useCanister } from "@connect2ic/svelte"

  let count
  const [counter, { loading }] = useCanister("counter")

  const refreshCounter = async () => {
    const freshCount = await $counter.getValue()
    count = freshCount
  }

  const increment = async () => {
    await $counter.increment()
    await refreshCounter()
  }

  $: {
    if (!$loading && $counter) {
      refreshCounter()
    }
  }

</script>
<div class="example">
  <p style="font-size: 2.5em;">{count?.toString()}</p>
  <button class="connect-button" on:click={increment}>+</button>
</div>
