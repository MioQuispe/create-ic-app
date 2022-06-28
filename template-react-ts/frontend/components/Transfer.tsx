import React from "react"
import { useWallet, useTransfer } from "@connect2ic/react"

const Transfer = () => {

  const [wallet] = useWallet()
  const [transfer] = useTransfer({
    to: "9dd04c8ba6039018a7b6d569cf6192efc596a0435fdc7f6fdb2d017518360409",
    amount: Number(0.01),
  })

  const onPurchase = async () => {
    const { height } = await transfer()
  }

  return (
    <div className="example">
      {wallet ? (
        <>
          <p>Buy me beer</p>
          <button className="connect-button" onClick={onPurchase}>Purchase</button>
        </>
      ) : (
        <p className="example-disabled">Connect with a wallet to access this example</p>
      )}
    </div>
  )
}

export { Transfer }
