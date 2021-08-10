import { PATH_APP } from "./paths"
import React, { lazy } from "react"
import { Redirect } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"

// ----------------------------------------------------------------------

const AppRoutes = {
  path: PATH_APP.root,
  layout: HomeLayout,
  routes: [
    // APP
    // ----------------------------------------------------------------------

    {
      exact: true,
      path: PATH_APP.app.counter,
      component: lazy(() => import("../views/CounterPageView")),
    },
    {
      exact: true,
      path: PATH_APP.app.greeting,
      component: lazy(() => import("../views/GreetingPageView")),
    },
    {
      exact: true,
      path: PATH_APP.app.helloWorld,
      component: lazy(() => import("../views/HelloPageView")),
    },

    // ----------------------------------------------------------------------
    {
      component: () => <Redirect to="/404" />,
    },
  ],
}

export default AppRoutes
