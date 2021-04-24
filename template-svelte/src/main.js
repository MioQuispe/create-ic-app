import App from './App.svelte'

/**
 * @dfinity/agent requires this. Can be removed once it's fixed
 */
window.global = window

const app = new App({
  target: document.getElementById('app')
})

export default app
