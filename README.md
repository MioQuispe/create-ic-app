<img height=160 src="https://sdk.dfinity.org/_/img/logo.svg" />

# Create IC App

Modern, unopinionated frontend templates for the Internet Computer powered by [ViteJS](https://vitejs.dev/)


## Requirements

* Install the beta version of the DFINITY Canister SDK

```
DFX_VERSION=0.7.0-beta.8 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)" 
```

* NodeJS >=16.0.0

## Get Started

```
npx create-ic-app
```

After the setup is done
```
cd test-project
npm install
```
Start the backend
```
dfx start --background
dfx deploy
```
Start the frontend
```
npm run dev
```
Thats it! The counter demo is persisted on your local Internet Computer.

<img width=500 src="https://cdn.discordapp.com/attachments/748420568268800060/835322875690221578/unknown.png" />


## Adding / Removing / Renaming Canisters

You will have to edit 3 files:

* dfx.json
* tsconfig.json
* src/agent.ts

More detailed instructions later. For now see how it's done in those files for the example counter canister.

## Deploying Asset Canister

For now you can only do this through [fleek.co](Fleek).

* Remove `ic-dfx-utils` from the project
* Choose `fleek/create-react-app` as the docker image in fleek
* Set publish directory as `dist`

## [Experimental] Watch mode for canisters
This will auto build and install your canisters whenever you make a change to them
```
npm run watch
```
<img width=300 src="https://i.imgur.com/JY6slsW.gif" />

## Community templates / Contributions
Want to contribute your own template? Find something that could be improved? Repo is open for PRs! Happy to assist you in this. You'll receive full credit for your contribution of course.

### Contributions
@ferMartz (React JS + Tailwind template)
