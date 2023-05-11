import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";
import { SignOutButton } from "./components/SignOutButton";

import PageLayout from "./components/PageLayout";
import Header from "./components/Layout/Header";
import PageWrapper from "./components/Layout/PageWrapper";

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <>
      <PageWrapper>
        <Header
          placeHolderText="Search"
          title="Customer Self-Service"
          description="Type in your search phrase or question and use our extensive database of answers"
          backgroundImage="/src/assets/Hero-BG.png"
        />
        <AuthenticatedTemplate>
          <p>This will only render if a user is signed-in.</p>
          <SignOutButton />
          <PageLayout />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p>This will only render if a user is not signed-in.</p>
          <SignInButton />
        </UnauthenticatedTemplate>
      </PageWrapper>
    </>
  );
}

export default App;
