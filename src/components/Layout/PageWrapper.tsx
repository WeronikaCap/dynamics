import Footer from "./Footer";
import Navigation from "./Navigation";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);
export default PageWrapper;
