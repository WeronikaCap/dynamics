import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";
import { SignOutButton } from "./components/SignOutButton";
import PageLayout from "./components/PageLayout";
import ArticleSection from "./components/articleSection/ArticleSection";

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <div className="w-screen">
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
    </div>
  );
}

export default App;
