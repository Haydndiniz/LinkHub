import links from "@json/links_projects.json";
import Link from "next/link";

const LinkList = () => {
  return (
    <section className="flex px-3 sm:px-0 pb-12">
      <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto">
        {links.map((link) => (
          <li className="mb-4" key={link.title}>
            {link.active && (
              <Link
                className="relative transition duration-200 font-bold bg-gray-700 border-gray-700 border-2 hover:bg-custom-1 py-4 w-100 block text-center text-gray-200 hover:text-gray-800 rounded-lg px-12 md:px-12"
                href={link.url}
                target="_blank"
                rel="noopener"
              >
                <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">
                  {link.emoji}
                </span>
                <span>{link.title}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LinkList;
