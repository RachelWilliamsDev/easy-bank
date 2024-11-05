"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FacebookLogo from "./FacebookLogo";
import InstagramLogo from "./InstagramLogo";
import Logo from "./Logo";
import PinterestLogo from "./PinterestLogo";
import RequestInviteButton from "./RequestInviteButton";
import TwitterLogo from "./TwitterLogo";
import YoutubeLogo from "./YoutubeLogo";

const Footer = () => {
  const socials = [
    {
      image: <FacebookLogo />,
      alt: "Facebook",
    },
    { image: <YoutubeLogo />, alt: "Youtube" },
    { image: <TwitterLogo />, alt: "Twitter" },
    { image: <PinterestLogo />, alt: "Pinterest" },
    { image: <InstagramLogo />, alt: "Instagram" },
  ];

  const links = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/support" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const pathname = usePathname();

  return (
    <div className="bg-primary-darkBlue w-screen">
      <div className="flex flex-col md:flex-row max-w-7xl w-full px-8 mx-auto py-11 items-center md:items-start md:justify-between">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="hover:cursor-pointer">
            <Logo color="#fff" />
          </Link>

          <div className="flex flex-row space-x-4 mt-14">
            {socials.map((social, i) => (
              <div key={i}>{social.image}</div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-6 mt-14 md:mt-0">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={` text-center md:text-left ${
                pathname === link.href
                  ? "text-primary-limeGreen"
                  : "text-neutral-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col flex-shrink-0 mt-14 md:mt-0 items-center md:items-end">
          <div className="md:ml-auto">
            <RequestInviteButton />
          </div>
          <p className="text-neutral-grayishBlue text-md mt-4">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
