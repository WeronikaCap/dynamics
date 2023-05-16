import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ContentContainer from "components/ContentContainer";
import Logo from "assets/Logo.png";

const Navigation = () => {
  return (
    <nav className=" bg-primary">
      <ContentContainer className="flex flex-col items-center lg:flex-row gap-16 h-20 ">
        <Link to="/">
          <img className="w-100" src={Logo} alt="Logo" />
        </Link>
        <div className="flex lg:justify-between items-center lg:flex- grow">
          <ul className="flex flex-col lg:flex-row gap-8">
            <li>
              <Link className="hover:text-base-black" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-base-black" to="/">
                Knowledge Base
              </Link>
            </li>
            <li>
              <Link className="hover:text-base-black" to="/">
                Forums
              </Link>
            </li>
            <li>
              <Link className="hover:text-base-black" to="/">
                My Support
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-center lg:flex-row gap-6">
            <Link to="/" className="text-blue">
              Register
            </Link>
            <Button variant="contained">Log in</Button>
          </div>
        </div>
      </ContentContainer>
    </nav>
  );
};

export default Navigation;
