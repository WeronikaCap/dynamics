import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";
import { SignOutButton } from "./components/SignOutButton";

import Navigation from "./components/Layout/Navigation";
import PageLayout from "./components/PageLayout";
import ArticleSection from "./components/articleSection/ArticleSection";
import Footer from "./components/Footer";

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <>
      <Navigation />
      <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
        <SignOutButton />
        <PageLayout />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>This will only render if a user is not signed-in.</p>
        <SignInButton />
      </UnauthenticatedTemplate>
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
