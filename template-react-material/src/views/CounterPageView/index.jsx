import React, { useState, useCallback, useEffect } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import LinearProgress from "@material-ui/core/LinearProgress"
import Button from "@material-ui/core/Button"
import logo from "../../assets/logo.svg"
import { counter } from "../../agent"

function CounterPageView() {
  const [count, setCount] = useState()

  const [isDisabled, setIsDisabled] = useState(false)

  const refreshCounter = useCallback(async () => {
    const res = await counter.getValue()
    setCount(res.toString())
    setIsDisabled(false)
  }, [])

  useEffect(() => {
    refreshCounter()
  }, [])

  const onIncrementClick = useCallback(async () => {
    setIsDisabled(true)
    setCount("...")
    await counter.increment()
    refreshCounter()
  }, [counter])
  return (
    <Box
      margin="6rem 0 0 0"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img
        src={logo}
        style={{ height: "20vmin", display: "block", margin: "2rem 0 2rem 0" }}
        alt="logo"
      />
      <Typography variant="h4" gutterBottom>
        Counter from Internet Computer
      </Typography>
      <Box
        width="10%"
        margin="1rem 0"
        display={isDisabled === true ? "block" : "none"}
      >
        <LinearProgress style={{ margin: "1rem 0" }} />
        <LinearProgress color="secondary" />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={onIncrementClick}
        disabled={isDisabled}
        style={{
          display: isDisabled === true ? "none" : "block",
          margin: "2rem 0",
        }}
      >
        {`count is : ${count}`}
      </Button>
    </Box>
  )
}

export default CounterPageView
