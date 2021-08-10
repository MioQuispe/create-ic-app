// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`
}

const ROOTS = {
  app: "/app",
  home: "/",
}

export const PATH_APP = {
  root: ROOTS.app,

  app: {
    counter: path(ROOTS.app, "/counter"),
    greeting: path(ROOTS.app, "/greeting"),
    helloWorld: path(ROOTS.app, "/hello-world"),
  },
}
