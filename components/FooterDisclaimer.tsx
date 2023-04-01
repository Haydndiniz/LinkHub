import Link from "next/link";

const FooterDisclaimer = () => {
  return (
    <div className="text-xs pb-2">
      <p>
        Tweaked{" "}
        <Link
          href="https://github.com/montoulieu/link-ent"
          target="_blank"
          className="text-custom-3"
        >
          LinkEnt
        </Link>
      </p>
    </div>
  );
};

export default FooterDisclaimer;
