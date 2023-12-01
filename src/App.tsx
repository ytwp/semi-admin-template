import './App.css'
import { ErrorBoundary } from './components/error';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Path } from './constant';
import { Login } from './components/login';
import { Home } from './components/home';
import { RootLayout as Layout } from './components/layout';
import { Dashboard } from './components/dashboard';

function Screen() {
  const isAuthorized = true;
  return (
    <>
      {isAuthorized ? (
        <Layout>
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.Dashboard} element={<Dashboard />} />
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
