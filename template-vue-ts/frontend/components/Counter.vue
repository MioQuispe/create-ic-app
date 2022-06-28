<script setup lang="ts">
import { useCanister } from "@connect2ic/vue"
import { ref, watchEffect } from "vue"

let count = ref()
const [counter] = useCanister("counter")

const refreshCounter = async () => {
  const freshCount = await counter.value.getValue()
  count.value = freshCount
}

const increment = async () => {
  await counter.value.increment()
  await refreshCounter()
}

watchEffect(() => {
  if (counter.value) {
    refreshCounter()
  }
})

</script>
<template>
  <div class="example">
    <p style="font-size: 2.5em">{{ count?.toString() }}</p>
    <button class="connect-button" @click="increment">+</button>
  </div>
</template>
