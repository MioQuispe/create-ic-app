<img height=160 src="https://sdk.dfinity.org/_/img/logo.svg" />

# Internet Computer Starter Templates

Templates for your favourite frontend framework powered by ViteJS

## Requirements

Install the beta version of the DFINITY Canister SDK

```
DFX_VERSION=0.7.0-beta.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)" 
```

## Get Started

With NPM:

```
npx create-ic-app
```

<img width=300 src="https://i.imgur.com/d0ASP0v.png" />

Just follow the instructions and thats it! The counter demo is persisted on your local Internet Computer.

<img width=500 src="https://cdn.discordapp.com/attachments/748420568268800060/835322875690221578/unknown.png" />

## Adding / Removing / Renaming Canisters

You will have to edit 3 files:

* dfx.json
* tsconfig.json
* src/agent.ts

More detailed instructions later. For now see how it's done in those files for the example counter canister.
