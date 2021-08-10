import React, { useState, useCallback } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import logo from "../../assets/logo.svg"
import { counter } from "../../agent"

function GreetingPageView() {
  const [inputStr, SetInputStr] = useState("")
  const [hello, setHello] = useState("")
  const doGreet = useCallback(async () => {
    if (inputStr !== "") {
      setHello("Greeting in progress...")
      let greeting = await counter.greet(inputStr)
      console.log(greeting)
      setHello(greeting)
    }
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
      <Typography variant="h4">Greetings from Internet Computer</Typography>
      <TextField
        label="Greeting"
        variant="outlined"
        value={inputStr}
        placeholder="Enter a greeting"
        onChange={(e) => SetInputStr(e.target.value)}
        style={{ margin: "2rem 0" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={doGreet}
        style={{ margin: "2rem 0" }}
      >
        send greeting
      </Button>
      <Typography variant="body1" color="secondary">
        {hello}
      </Typography>
    </Box>
  )
}

export default GreetingPageView
