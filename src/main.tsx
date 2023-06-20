import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./auth/authConfig";

// create PublicClientApplication instance
const publicClientApplication = new PublicClientApplication(msalConfig);

// Wrap your app component tree in the MsalProvider component
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={publicClientApplication}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>
);
