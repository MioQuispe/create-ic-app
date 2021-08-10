import { AppTheme } from "./types"
import { grey, blueGrey } from "@material-ui/core/colors"

const appThemeOptions = {
  [AppTheme.LIGHT]: {
    palette: {
      type: "light",
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: {
        main: "#4F46E5",
        contrast: "#fff",
      },
      secondary: {
        main: "#EC4899",
        contrast: "#fff",
      },
      text: {
        primary: blueGrey[700],
        secondary: blueGrey[400],
        disabled: grey.A200,
        hint: grey.A200,
      },
      background: {
        paper: "#fff",
        default: "#fafafa",
      },
    },
  },
  [AppTheme.DARK]: {
    palette: {
      type: "dark",
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: {
        main: "#4F46E5",
        contrast: "#fff",
      },
      secondary: {
        main: "#EC4899",
        contrast: "#fff",
      },
      text: {
        primary: blueGrey[300],
        secondary: blueGrey[100],
        disabled: grey.A200,
        hint: grey.A200,
      },
      background: {
        paper: "#222639",
        default: "#1B1E2E",
      },
    },
  },
}

export default appThemeOptions
