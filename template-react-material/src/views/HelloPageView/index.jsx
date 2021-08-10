import React, { useState, useCallback } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import logo from "../../assets/logo.svg"
import Button from "@material-ui/core/Button"
import { counter } from "../../agent"

function HelloPageView() {
  const [helloWorld, setHelloWorld] = useState("")

  const queryHelloWorld = useCallback(async () => {
    setHelloWorld("Query is in progress...")
    let hello = await counter.hello()
    setHelloWorld(hello)
  })
  return (
    <Box
      margin="6rem 0 0 0"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img
        src={logo}
        style={{ height: "20vmin", display: "block", margin: "2rem 0" }}
        alt="logo"
      />
      <Typography variant="h4">Hello World from Internet Computer</Typography>
      <Button
        variant="contained"
        color="primary"
        children="query hello world"
        onClick={queryHelloWorld}
        style={{ margin: "2rem 0" }}
      />
      <Typography
        style={{ margin: "2rem 0" }}
        color="secondary"
        variant="body1"
        children={helloWorld}
      />
    </Box>
  )
}

export default HelloPageView
