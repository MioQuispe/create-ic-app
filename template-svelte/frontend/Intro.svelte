<script>
  import logo from "./assets/logo-dark.svg"
  import { onMount } from "svelte"
  import { counter } from "canisters/counter"

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

<header class="App-header">
  <img src={logo} class="App-logo" alt="logo" />
  <p style="font-size: 2em; margin-bottom: 0.5em">${{Ready}}</p>
  <div
    style="display: flex; font-size: 0.7em; text-align: left; padding: 2em; border-radius: 30px; flex-direction: column; background: rgb(220 218 224 / 25%);">
    <div>
      <code>npm run dev:</code>
      <span> ${{RunDev}}</span>
    </div>
    <div>
      <code>npm run build:</code>
      <span> ${{RunProd}}</span>
    </div>
    <div>
      <code>npm run serve:</code>
      <span> ${{RunServe}}</span>
    </div>
    <hr />
    <div>
      <code>dfx deploy:</code>
      <span> ${{deploy}}</span>
    </div>
    <div style="text-align: center; font-size: 0.8em; margin-top: 2em;">
      <a
        class="App-link"
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${{ViteDocs}}
      </a>
      {" | "}
      <a
        class="App-link"
        href="https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${{ICSDKDocs}}
      </a>
    </div>
  </div>
  <button class="demo-button" on:click={increment}>
    ${{CountIs}}: {count}
  </button>
  <p style="font-size: 0.6em;">
    ${{counterDesc}}
  </p>
  <p style="font-size: 0.4em;">by <a href="https://twitter.com/miamaruq">@miamaruq</a></p>
</header>

<style global>
    .App-logo {
        height: 15vmin;
        pointer-events: none;
    }

    .App-header {
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
    }

    .App-link {
        color: rgb(26, 117, 255);
    }

    .demo-button {
        background: #a02480;
        padding: 0 1.3em;
        margin-top: 1em;
        border-radius: 60px;
        font-size: 0.7em;
        height: 35px;
        outline: 0;
        border: 0;
        cursor: pointer;
        color: white;
    }

    .demo-button:active {
        color: white;
        background: #979799;
    }
</style>
