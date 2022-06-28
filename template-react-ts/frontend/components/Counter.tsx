import { useCanister } from "@connect2ic/react"
import React, { useEffect, useState } from "react"

const Counter = () => {
  /*
  * This how you use canisters throughout your app.
  */
  const [counter] = useCanister("counter")
  const [count, setCount] = useState<bigint>()

  const refreshCounter = async () => {
    const freshCount = await counter.getValue() as bigint
    setCount(freshCount)
  }

  const increment = async () => {
    await counter.increment()
    await refreshCounter()
  }

  useEffect(() => {
    if (!counter) {
      return
    }
    refreshCounter()
  }, [counter])

  return (
    <div className="example">
      <p style={{ fontSize: "2.5em" }}>{count?.toString()}</p>
      <button className="connect-button" onClick={increment}>+</button>
    </div>
  )
}

export { Counter }