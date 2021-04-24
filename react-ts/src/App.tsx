import React, { useCallback, useEffect, useState } from "react"
import logo from "./assets/logo.svg"
import "./App.css"
import { counter } from "./agent"

function App() {
  const [count, setCount] = useState()

  const refreshCount = useCallback(async () => {
    const res: any = await counter.getValue()
    setCount(res.toString())
  }, [])

  useEffect(() => {
    refreshCount()
  }, [])

  const onIncrementClick = useCallback(async () => {
    await counter.increment()
    refreshCount()
  }, [counter])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Internet Computer + Vite + React!</p>
        <p>
          <button className="demo-button" onClick={onIncrementClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            IC SDK Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
