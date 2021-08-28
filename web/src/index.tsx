/* eslint-disable max-len */
// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css'
import {Switch, Route ,HashRouter} from "react-router-dom";
import { Backdrop, CircularProgress } from "@material-ui/core";
import routes from 'router/routes';
import { GlobalLoadingProvider, GlobalLoadingContext } from 'contexts/globalLoading';
import Layout from './layout'

const App: React.FC = () => {
  const { loading } = useContext(GlobalLoadingContext);

  return (
    <>
      <Backdrop open={loading} style={{ color: "#fff", zIndex: 999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Layout>
        <HashRouter >
          <Switch>
            {routes.map(({ path, component }) => (
              <Route exact key={path} path={path} component={component} />
            ))}
          </Switch>
        </HashRouter>

      </Layout>
    </>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <GlobalLoadingProvider>
      <App />
    </GlobalLoadingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals