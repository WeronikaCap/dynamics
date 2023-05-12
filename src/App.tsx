import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";
import { SignOutButton } from "./components/SignOutButton";

import Navigation from "./components/Layout/Navigation";
import PageLayout from "./components/PageLayout";
import Footer from "./components/Footer";
import Header from "./components/Layout/Header";

import HeroBG from "./assets/Hero-BG.png"
import ArticlePage from "./components/ArticlePage";

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <>
    <Navigation/>
    <Header placeHolderText="Search" title="Customer Self-Service" description="Type in your search phrase or question and use our extensive database of answers" 
      backgroundImage="/src/assets/Hero-BG.png"/>
      <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
        <SignOutButton />
        <PageLayout />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>This will only render if a user is not signed-in.</p>
        <SignInButton />
      </UnauthenticatedTemplate>
      <ArticlePage />
      <Footer />
    </>
  );
}

export default App;