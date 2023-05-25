import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";
import { loginRequest } from "auth/authConfig";

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType: any) => {
        if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
      <Button variant="contained" onClick={() => handleLogin("redirect")}>
        Sign In
      </Button>
    );
}