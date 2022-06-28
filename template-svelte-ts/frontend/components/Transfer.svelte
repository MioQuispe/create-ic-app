<script lang="ts">
  import { useWallet, useTransfer } from "@connect2ic/svelte"

  const [wallet] = useWallet()
  const [transfer] = useTransfer({
    to: "k6jaa-yr3je-rx4ge-wwk7y-sysc4-cluwg-y4fuu-lkl5h-uutjg-tcy3q-rae",
    amount: Number(0.01),
  })

  const onPurchase = async () => {
    const { height } = await transfer()
  }
</script>
<div class="example">
  {#if $wallet}
    <p>Buy me a beer</p>
    <button class="connect-button" on:click={onPurchase}>Purchase</button>
  {:else}
    <p class="example-disabled">Connect with a wallet to access this example</p>
  {/if}
</div>
