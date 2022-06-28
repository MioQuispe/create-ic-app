<script setup>
import { useWallet, useTransfer } from "@connect2ic/vue"

const [wallet] = useWallet()
const [transfer] = useTransfer({
  to: "k6jaa-yr3je-rx4ge-wwk7y-sysc4-cluwg-y4fuu-lkl5h-uutjg-tcy3q-rae",
  amount: Number(0.01),
})

const onPurchase = async () => {
  const { height } = await transfer()
}

</script>
<template>
  <div class="example">
    <template v-if="wallet">
      <p>Buy me a beer</p>
      <button class="connect-button" @click="onPurchase">Purchase</button>
    </template>
    <template v-else>
      <p class="example-disabled">Connect with a wallet to access this example</p>
    </template>
  </div>
</template>
