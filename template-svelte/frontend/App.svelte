<script>
  import logo from "./assets/dfinity.svg"
  /*
   * Connect2ic provides essential utilities for IC app development
   */
  import { createClient } from "@connect2ic/core"
  import { defaultProviders } from "@connect2ic/core/providers"
  import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/svelte"
  import "@connect2ic/core/style.css"
  /*
   * Import canister definitions like this:
   */
  import * as counter from "../.dfx/local/canisters/counter"
  /*
   * Some examples to get you started
   */
  import Counter from "./components/Counter.svelte"
  import Profile from "./components/Profile.svelte"
  import Transfer from "./components/Transfer.svelte"

  const client = createClient({
    canisters: {
      counter,
    },
    providers: defaultProviders,
    globalProviderConfig: {
      dev: import.meta.env.DEV,
    },
  })
</script>

<Connect2ICProvider client={client}>
  <div class="App">
    <div class="auth-section">
      <ConnectButton />
    </div>
    <ConnectDialog />
    <header class="App-header">
      <img src={logo} class="App-logo" alt="logo" />
      <p class="slogan">
        Svelte+TypeScript Template
      </p>
      <p class="twitter">by <a href="https://twitter.com/miamaruq">@miamaruq</a></p>
    </header>

    <p class="examples-title">
      Examples
    </p>
    <div class="examples">
      <Counter />
      <Profile />
      <Transfer />
    </div>
  </div>
</Connect2ICProvider>

<style global>
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #424242;
    }

    button {
        font-weight: 600;
    }

    .slogan {
        font-size: 1.7em;
        margin-bottom: 0;
    }

    .twitter {
        font-size: 0.4em;
    }

    .App-logo {
        height: 14vmin;
        pointer-events: none;
        transform: scale(1);
        animation: pulse 3s infinite;
    }

    .App-header {
        height: calc(100vh - 70px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
    }

    .examples {
        padding: 30px 100px;
        display: grid;
        grid-gap: 30px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .examples-title {
        font-size: 1.3em;
        margin-bottom: 0;
        text-align: center;
    }

    .example {
        padding: 50px 50px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /*border: 1px solid black;*/
        /*background: #f4f4f4;*/
        border-radius: 15px;
    }

    .example-disabled {
        font-size: 1.3em;
        color: #9e9e9e;
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

    .auth-section {
        padding: 1em;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: right;
        position: fixed;
        top: 0;
        right: 0;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.97);
            opacity: 0;
        }

        70% {
            transform: scale(1);
            opacity: 1;
        }

        100% {
            transform: scale(0.97);
            opacity: 0;
        }
    }
</style>
