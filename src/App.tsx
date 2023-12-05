import './App.css'
import { ErrorBoundary } from './components/error';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './components/login';
import { RootLayout as Layout } from './components/layout';
import { routers } from './router';

function Screen() {
  const isAuthorized = true;
  return (
    <>
      {isAuthorized ? (
        <Layout>
          <Routes>
            {routers.flatMap((router) => {
              if (router.items) {
                return router.items.map((subRouter) => {
                  return <Route {...subRouter.routeProps} key={subRouter.itemKey} />
                })
              } else {
                return [<Route {...router.routeProps} key={router.itemKey} />]
              }
            })}
          </Routes>
        </Layout>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Screen />
        </Router>
      </ErrorBoundary>
    </>
  )
}

export default App
