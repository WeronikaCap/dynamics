import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SignInButton } from "components/SignInButton";
import { SignOutButton } from "components/SignOutButton";

import PageLayout from "components/PageLayout";
import Header from "components/Layout/Header";
import ArticleSection from "components/articleSection/components/ArticleSection";

const Homepage =()=>{
    return (
        <>
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
          <ArticleSection />
        </>
    )
}


export default Homepage;
