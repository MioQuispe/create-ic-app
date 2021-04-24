import App from './App.svelte'

/**
 * @dfinity/agent requires this. Can be removed once it's fixed
 */
(window as any).global = window

const app = new App({
  target: document.getElementById('app')
})

export default app
