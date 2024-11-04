import Link from "next/link";

const MobileNavigation = ({ open, pages, ref }) => {
  if (!open) return null;
  return (
    <div
      ref={ref}
      className="absolute top-24 bg-neutral-white flex flex-col left-8 right-8 w-auto z-10 items-center p-4 rounded-md "
    >
      {pages.map((page, i) => (
        <Link
          href={page.href}
          key={i}
          className="py-2 text-lg font-medium text-neutral-grayishBlue"
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavigation;
