import "./style.css"
import {counter} from "./agent"

/**
 * @dfinity/agent requires this. Can be removed once it's fixed
 */
(window as any).global = window

;(async () => {
  const app = document.querySelector<HTMLDivElement>("#app")!
  const count: any = await counter.getValue()

  app.innerHTML = `
    <h1>Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a><br />
    <button>Count: ${count.toString()}</button>
  `
})()
