import links from "@json/links.json";
import Link from "next/link";

import createIconComponent from "@components/createIconComponent";

function isEmoji(emoji: string) {
  var ranges = [
    "(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])", // U+1F680 to U+1F6FF
  ];
  if (emoji.match(ranges.join("|"))) {
    return true;
  } else {
    return false;
  }
}

const LinkList = () => {
  return (
    <main className="flex px-3 sm:px-0">
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
                  {isEmoji(link.emoji)
                    ? link.emoji
                    : createIconComponent(link.emoji)}
                </span>
                <span>{link.title}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LinkList;
