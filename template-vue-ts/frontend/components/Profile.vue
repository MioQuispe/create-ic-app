<script setup lang="ts">
import { useWallet, useBalance } from "@connect2ic/vue"

const [wallet] = useWallet()
const [assets] = useBalance()

</script>
<template>
  <div class="example">
    <template v-if="wallet">
      <p>Wallet address: <span style="font-size: 0.7em">{{ wallet.principal }}</span></p>
      <table>
        <tbody>
        <template v-if="assets">
          <tr v-for="asset in assets">
            <td>
              {{ asset.name }}
            </td>
            <td>
              {{ asset.amount }}
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </template>
    <template v-else>
      <p class="example-disabled">Connect with a wallet to access this example</p>
    </template>
  </div>
</template>
