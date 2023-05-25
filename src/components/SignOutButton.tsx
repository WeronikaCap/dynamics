import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType: any) => {
    if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };
  return (
    <Button variant="outlined" onClick={() => handleLogout("redirect")}>
      Sign Out
    </Button>
  );
};
