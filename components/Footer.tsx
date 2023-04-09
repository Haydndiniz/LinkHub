import SocialLinks from "@components/SocialLinks";
import FooterDisclaimer from "@components/FooterDisclaimer";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="px-3 sm:px-0">
      <div className="container text-center mx-auto">
        <div className="md:w-4/6 mx-auto">
          <SocialLinks />
          {/* <FooterDisclaimer /> */}
          <Link
          href="https://uptime.haydndiniz.dev"
          target="_blank"
          className = "transition w-40 duration-200 bg-gray-700 border-gray-700 border-2 hover:bg-custom-1 py-4 px-4 rounded-lg text-gray-200 hover:text-gray-800"
          >
          Service Status 
        </Link>
        </div>
      </div>
      <div className="container text-center mx-auto">
        
      </div>
    </footer>
  );
};

export default Footer;
