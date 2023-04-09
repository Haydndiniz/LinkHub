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
        </div>
      </div>
      <div className="container text-left mx-auto">
        <Link
          href="https://uptime.haydndiniz.dev"
          target="_blank"
          className="text-custom-3"
          >
          Service status
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
