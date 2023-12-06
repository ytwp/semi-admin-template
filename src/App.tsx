import { ErrorBoundary } from './components/error';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './components/login';
import { RootLayout as Layout } from './components/layout';
import { routers } from './router';
import { LocaleProvider } from '@douyinfe/semi-ui';
import { getSemiLang } from './locales';
import { useAccessStore } from './store';

function Screen() {
  const access = useAccessStore();
  return (
    <>
      {access.isAuthorized() ? (
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
        <LocaleProvider locale={getSemiLang()}>
          <Router>
            <Screen />
          </Router>
        </LocaleProvider >
      </ErrorBoundary>
    </>
  )
}

export default App
