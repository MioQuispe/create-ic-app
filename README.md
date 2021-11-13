<img height=160 src="https://sdk.dfinity.org/_/img/logo-dark.svg" />

# Create IC App

Use your favourite frontend framework with the Internet Computer. Powered by [ViteJS](https://vitejs.dev/)

- Modern and unopinionated templates
- Internet Identity auth example included
- Easily configurable when needed (see vite docs)

#### Requirements

* [DFINITY Canister SDK](https://dfinity.org/developers/) latest version (v0.8.1)
* [NodeJS](https://nodejs.org) version >= 12


## Quick start

**1.** Start the wizard and choose your preferred settings (npx comes with NodeJS)
```
npx create-ic-app@latest
```
<img width=500 src="https://i.imgur.com/vwxC6NI.gif" />


**2.** After the setup is finished run:

```
cd my-ic-app

npm install
dfx start --background
dfx deploy
npm run dev
```

**3.** Thats it! Ready to go.

<img width=600 src="https://i.imgur.com/5Lf5i7v.png" />


## Canisters
Import them in your Javascript like so, it is configured in `vite.config.js` to work automatically
```js
import { counter } from "canisters/counter"
```

When wishing to remove, add or rename a canister, you will have to edit 2 files:

* `/dfx.json`
* `/tsconfig.json` (if using typescript, see paths option)

## Deploying

More detailed walkthrough soon. For now follow the official guides.

For [Fleek](https://fleek.co)

* Choose `fleek/create-react-app` as the docker image
* Set publish directory as `dist`

## FAQ

#### Q: Is this usable for real apps or just for toys?

A: Yes 100% usable. You don't have to use webpack anymore. ViteJS bundles with `rollup` when you run the `npm run build` command. This can result in even [smaller](https://blog.logrocket.com/benchmarking-bundlers-2020-rollup-parcel-webpack/) sizes than with webpack (which most frameworks are leaving behind).
However when developing it skips that because it's unnecessary, and hence provides a better experience.

#### Q: I want to modify things like directory structure. Can I?

A: Yes! Go wild. ViteJS is very customizable and has excellent documentation. This project is only aiming to provide useful defaults and to get you started quickly.

## Contributions
Want to contribute your own template? Find something that could be improved? Repo is open for PRs.

:trophy:
@ferMartz (React JS + Tailwind template)

