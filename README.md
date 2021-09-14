<img height=160 src="https://sdk.dfinity.org/_/img/logo-dark.svg" />

# Create IC App

```
npx create-ic-app@latest
```
Modern, unopinionated frontend templates for the Internet Computer powered by [ViteJS](https://vitejs.dev/)


#### Requirements

[DFINITY Canister SDK](https://dfinity.org/developers/)


## Setup


After running npx
```
cd my-ic-app

npm install
dfx start --background
dfx deploy
npm run dev
```
Thats it! Ready to go.

<img width=800 src="https://i.imgur.com/5Lf5i7v.png" />


## Editing canisters

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

## Community templates / Contributions
Want to contribute your own template? Find something that could be improved? Repo is open for PRs.

#### Contributions
@ferMartz (React JS + Tailwind template)

