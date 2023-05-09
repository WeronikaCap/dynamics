import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.svg";
import ContentContainer from "./ContentContainer";

const Footer = () => (
  <ContentContainer className="bottom-0 left-0 w-full bg-main-dark text-main-gray py-12">
      <div className="text-center pb-8">
        <div className="flex pb-4 justify-center">
          <img src={Logo} alt="Contoso logo" />
          <p className="pl-3 text-lg text-light-gray font-bold tracking-widest">
            CONTOSO
          </p>
        </div>
        <p className="">
          This site uses sample data for demonstration purposes.
        </p>
      </div>
      <div className="flex justify-between pt-4 border-t border-gray-600">
        <p>Copyright © 2023. All rights reserved.</p>
        <div className="text-white">
          <FontAwesomeIcon size="xl" icon={faInstagram} />
          <FontAwesomeIcon className="px-6" size="xl" icon={faTwitter} />
          <FontAwesomeIcon size="xl" icon={faFacebook} />
        </div>
    </div>
  </ContentContainer>
);
export default Footer;
