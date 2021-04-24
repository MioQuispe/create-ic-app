<img height=160 src="https://sdk.dfinity.org/_/img/logo.svg" />

# Internet Computer Starter Templates

Templates for your favourite frontend framework powered by ViteJS

## Requirements

Install the beta version of the DFINITY Canister SDK

```
DFX_VERSION=0.7.0-beta.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)" 
```

## Get Started

Type the following into a terminal. Substitute react-ts for your preferred framework (vue-ts, svelte-ts currently) and
my-app for the name of your app. It will work as long as you have npm installed on your system

```
npx degit MioQuispe/ic-starter-templates/react-ts my-app
```

Now we need to get our example canister running

```
cd my-app
npm install

dfx start --background
dfx canister create --all
dfx build
dfx canister install --all
```

And finally, start the frontend

```
npm run dev
```

Thats it! The counter you see is persisted on your local Internet Computer.

<img width=500 src="https://cdn.discordapp.com/attachments/748420568268800060/835322875690221578/unknown.png" />

## Adding / Removing / Renaming Canisters

You will have to edit 3 files:

* dfx.json
* tsconfig.json
* src/agent.ts

More detailed instructions later. For now see how it's done in those files for the example counter canister.
