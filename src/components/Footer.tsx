import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-[10dvh] items-center">
        <p className="">
          Powered by{" "}
          <Link
            target="_blank"
            className="text-blue-500"
            href={"https://swapi.dev/"}
          >
            SWAPI
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
