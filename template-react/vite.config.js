import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import path from "path"
import babel from "@rollup/plugin-babel"
import dfxJson from "./dfx.json"

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
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      ...aliases,
    },
  },
  rollupInputOptions: {
    plugins: [
      babel({
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: 2,
              useBuiltIns: "usage",
              targets: {
                ie: "11",
              },
            },
          ],
        ],
      }),
    ],
  },
})
