import Image from "next/image";
import Link from "next/link";
import RequestInviteButton from "./RequestInviteButton";

const NavBar = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];
  return (
    <div className="flex flex-row w-full bg-white h-20 justify-between items-center max-w-7xl mx-auto px-8">
      <div className="flex">
        <Image src="/images/logo.svg" alt="" width={139} height={20} />
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-grayishBlue">
        {pages.map((page, i) => (
          <Link key={i} href={page.href}>
            {page.name}
          </Link>
        ))}
      </div>

      <RequestInviteButton />
      <div className="md:hidden">
        <Image
          src="/images/icon-hamburger.svg"
          alt="menu icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
export default NavBar;
