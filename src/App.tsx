import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";
import { SignOutButton } from "./components/SignOutButton";

import Navigation from "./components/Layout/Navigation";
import PageLayout from "./components/PageLayout";
<<<<<<< HEAD
import ArticleSection from "./components/articleSection/ArticleSection";
=======
import Footer from "./components/Footer";
>>>>>>> develop

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
<<<<<<< HEAD
    <div className="w-screen">
=======
    <>
    <Navigation/>
>>>>>>> develop
      <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
        <SignOutButton />
        <PageLayout />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>This will only render if a user is not signed-in.</p>
        <SignInButton />
      </UnauthenticatedTemplate>
<<<<<<< HEAD
      <ArticleSection />
    </div>
=======
      <Footer />
    </>
>>>>>>> develop
  );
}

export default App;
