import Image from "next/image";
import RequestInviteButton from "./RequestInviteButton";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-neutral-veryLightGray to-neutral-white relative w-screen">
      <div className="absolute -top-24 right-0 lg:hidden max-w-[533px]">
        <Image
          src="/images/bg-intro-mobile.svg"
          alt=""
          width={533}
          height={400}
        />
      </div>
      <div className="overflow-hidden relative">
        <div className="lg:hidden absolute top-[-226px] right-0 max-w-[533px]">
          <Image
            src={"/images/image-mockups.png"}
            alt=""
            width={768}
            height={939}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between py-8 lg:py-[180px] px-8 max-w-7xl w-full mx-auto relative mt-[440px] lg:mt-0">
          <div className="max-w-[390px] mb-8 lg:mb-0 lg:mr-16 z-50">
            <h1 className="text-center md:text-left text-5xl font-light text-primary-darkBlue mb-4">
              Next generation digital banking
            </h1>
            <p className="text-center md:text-left text-neutral-grayishBlue mb-6">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <RequestInviteButton />
          </div>
        </div>
        <div className="absolute top-[-300px] right-[-540px] hidden lg:flex">
          <Image
            src="/images/bg-intro-desktop.svg"
            alt=""
            width={1440}
            height={400}
          />
        </div>
      </div>
      <div className="absolute top-[-124px] -right-32 hidden lg:flex">
        <Image
          src={"/images/image-mockups.png"}
          alt=""
          width={768}
          height={939}
        />
      </div>
    </header>
  );
};
export default Header;
