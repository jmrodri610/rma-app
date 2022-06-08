import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "../src/components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "../src/styles/custom-theme/customTheme";
//TODO DARK MODE
// import customDarkTheme from "../src/styles/custom-theme/customDarkTheme";

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
