import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import RequestInviteButton from "./RequestInviteButton";

const Footer = () => {
  const socials = [
    {
      image: "/images/icon-facebook.svg",
      alt: "Facebook",
    },
    { image: "/images/icon-youtube.svg", alt: "Youtube" },
    { image: "/images/icon-twitter.svg", alt: "Twitter" },
    { image: "/images/icon-pinterest.svg", alt: "Pinterest" },
    { image: "/images/icon-instagram.svg", alt: "Instagram" },
  ];

  const links = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/support" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <div className="bg-primary-darkBlue w-screen">
      <div className="flex flex-col md:flex-row max-w-7xl w-full px-8 mx-auto py-11 items-center md:items-start md:justify-between">
        <div className="flex flex-col items-center md:items-start">
          <Logo color="#fff" />
          <div className="flex flex-row space-x-4 mt-14">
            {socials.map((social, i) => (
              <Image
                src={social.image}
                alt={social.alt}
                width={20}
                height={20}
              />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-6 mt-14 md:mt-0">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-neutral-white text-center md:text-left"
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
