import socialLinks from "@json/social-links.json";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <ul className="py-6">
      {socialLinks.map((link) => (
        <li className="mr-3 inline" key={link.icon}>
          <Link
            className="text-gray-700  hover:text-custom-1"
            href={link.url}
            target="_blank"
            rel="noopener"
          >
            <i className={`fa fa-2x fa-${link.icon}`}></i>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
