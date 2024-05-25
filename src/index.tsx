import * as React from "react";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <>
    <GlobalStyle />
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </>
);
