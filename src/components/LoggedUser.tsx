import { useMsal } from "@azure/msal-react";

const LoggedUser = () => {
  const { accounts } = useMsal();
  const username = accounts[0].name;

  return (
    <>
      <p>Welcome, {username}</p>
    </>
  );
}

export default LoggedUser;