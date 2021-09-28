import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from '../src/components/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { msalConfig } from './authConfig';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

const msalInstance = new PublicClientApplication(msalConfig);


ReactDOM.render(
  <HashRouter>
    <CssBaseline />
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
