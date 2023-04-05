import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
