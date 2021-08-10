import NProgress from "nprogress"
import React, { Suspense, Fragment, useEffect, lazy } from "react"
import { Switch, Route } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import HomeRoutes from "./HomeRoutes"

function RouteProgress(props) {
  NProgress.configure({
    speed: 500,
    showSpinner: false,
  })

  useEffect(() => {
    NProgress.done()
    return () => {
      NProgress.start()
    }
  }, [])

  return <Route {...props} />
}
function LoadingScreen() {
  return <p>Loading Screen</p>
}
export function renderRoutes(routes = []) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Component = route.component
          const Guard = route.guard || Fragment
          const Layout = route.layout || Fragment

          return (
            <RouteProgress
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          )
        })}
      </Switch>
    </Suspense>
  )
}

const routes = [
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("../views/Page404View")),
  },
  AppRoutes,
  HomeRoutes,
]

export default routes
