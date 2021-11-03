import React, { useEffect, useState } from "react"
import { counter } from "canisters/counter"
import logo from "./assets/logo-dark.svg"

export function Intro() {
  const [count, setCount] = useState<string>()

  const refreshCounter = async () => {
    const res = await counter.getValue()
    setCount(res.toString())
  }

  useEffect(() => {
    refreshCounter()
  }, [])

  const onIncrementClick = async () => {
    await counter.increment()
    refreshCounter()
  }

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "2em", marginBottom: "0.5em" }}>${{Ready}}</p>
        <div style={{
          display: "flex",
          fontSize: "0.7em",
          textAlign: "left",
          padding: "2em",
          borderRadius: "30px",
          flexDirection: "column",
          background: "rgb(220 218 224 / 25%)",
        }}>
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
          <hr/>
          <div>
            <code>dfx deploy:</code>
            <span> ${{deploy}}</span>
          </div>
          <div style={{textAlign: "center", fontSize: "0.8em", marginTop: "2em"}}>
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${{ViteDocs}}
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${{ICSDKDocs}}
            </a>
          </div>
        </div>
        <button className="demo-button" onClick={onIncrementClick}>
          ${{CountIs}}: {count}
        </button>
        <p style={{fontSize: "0.6em"}}>
          ${{counterDesc}}
        </p>
        <p style={{fontSize: "0.4em"}}>by <a href="https://twitter.com/miamaruq">@miamaruq</a></p>
      </header>
    </>
  )
}