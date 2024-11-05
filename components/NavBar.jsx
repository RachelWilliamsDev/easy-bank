"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import RequestInviteButton from "./RequestInviteButton";

const NavBar = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setIsMobileNavigationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNavRef]);

  return (
    <div className="z-50 bg-neutral-white shadow-sm">
      <div className="relative flex flex-row w-full h-20 justify-between items-center max-w-7xl mx-auto px-8 ">
        <div className="flex">
          <Logo />
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-grayishBlue">
          {pages.map((page, i) => (
            <Link key={i} href={page.href}>
              {page.name}
            </Link>
          ))}
        </div>

        <RequestInviteButton hidden />
        <div className="md:hidden">
          <Image
            src="/images/icon-hamburger.svg"
            alt="menu icon"
            width={24}
            height={24}
            onClick={() => setIsMobileNavigationOpen(!isMobileNavigationOpen)}
          />
        </div>
        <MobileNavigation
          open={isMobileNavigationOpen}
          pages={pages}
          ref={mobileNavRef}
        />
      </div>
    </div>
  );
};
export default NavBar;
