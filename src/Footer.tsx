import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="fixed bottom-0 left-0 w-full bg-main-dark text-main-gray px-8 py-12">
    <div className="text-center pb-8">
      <p className="text-lg text-light-gray font-bold tracking-widest pb-4">
        CONTOSO
      </p>
      <p className="">This site uses sample data for demonstration purposes.</p>
    </div>
    <div className="flex justify-between pt-4 border-t border-gray-600">
      <p>Copyright © 2023. All rights reserved.</p>
      <div className="text-white">
        <FontAwesomeIcon size="xl" icon={faInstagram} />
        <FontAwesomeIcon className="px-6" size="xl" icon={faTwitter} />
        <FontAwesomeIcon size="xl" icon={faFacebook} />
      </div>
    </div>
  </div>
);
export default Footer;
