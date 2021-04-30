import { defineConfig } from "vite"
import dfxJson from "./dfx.json"
import path from "path"

// List of all aliases for canisters
const aliases = Object.entries(dfxJson.canisters).reduce(
  (acc, [name, _value]) => {
    // Get the network name, or `local` by default.
    const networkName = process.env["DFX_NETWORK"] || "local"
    const outputRoot = path.join(
      __dirname,
      ".dfx",
      networkName,
      "canisters",
      name,
    )

    return {
      ...acc,
      ["dfx-generated/" + name]: path.join(outputRoot, name + ".js"),
    }
  },
  {},
)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      ...aliases,
    },
  },
})
