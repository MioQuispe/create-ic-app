<template>

  <div class="auth-section">
    <button v-if="!signedIn && clientReady" @click="signIn()" class="auth-button">
      Sign In
      <img alt="" style="width: 33px; margin-right: -1em; margin-left: 0.7em;" src="./assets/dfinity.svg" />
    </button>

    <template v-if="signedIn">
      <p>Signed in as: {{ principal }}</p>
      <button @click="signOut()" class="auth-button">Sign out</button>
    </template>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue"
import { AuthClient } from "@dfinity/auth-client"

let signedIn = ref(false)
let client
let clientReady = ref(false)
let principal = ref("")

const initAuth = async () => {
  client = await AuthClient.create()
  clientReady.value = true
  const isAuthenticated = await client.isAuthenticated()

  if (isAuthenticated) {
    const identity = client.getIdentity()
    principal.value = identity.getPrincipal().toString()
    signedIn.value = true
  }
}

export default {
  name: "Auth",
  setup: () => {
    const signIn = async () => {
      const result: any = await new Promise((resolve, reject) => {
        client.login({
          identityProvider: "https://identity.ic0.app",
          onSuccess: () => {
            const identity = client.getIdentity()
            const principal = identity.getPrincipal().toString()
            resolve({ identity, principal })
          },
          onError: reject,
        })
      })
      principal.value = result.principal
      signedIn.value = true
    }

    const signOut = async () => {
      await client.logout()
      signedIn.value = false
      principal.value = ""
    }

    onMounted(initAuth)

    return { clientReady, principal, signedIn, signOut, signIn }
  },
}
</script>

<style scoped>
.auth-section {
  padding: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  position: fixed;
  top: 0;
  right: 0;
}

.auth-button {
  color: black;
  background: white;
  padding: 0 2em;
  border-radius: 60px;
  font-size: 1em;
  line-height: 40px;
  height: 33px;
  outline: 0;
  border: 0;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  align-items: center;
}
</style>
