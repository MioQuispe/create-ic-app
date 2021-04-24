<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
        href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
        target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    |
    <a
        href="https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html"
        target="_blank"
    >
      IC SDK Docs
    </a>
  </p>

  <button class="demo-button" @click="increment()">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue"
import { counter } from "../agent"

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)

    const refreshCounter = async () => {
      const res: any = await counter.getValue()
      count.value = res.toString()
    }

    const increment = async () => {
      await counter.increment()
      refreshCounter()
    }

    onMounted(refreshCounter)

    return { increment, count }
  },
})
</script>

<style scoped>
a {
  color: rgb(26, 117, 255);
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.demo-button {
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
