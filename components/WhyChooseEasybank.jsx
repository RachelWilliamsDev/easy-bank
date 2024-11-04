import Image from "next/image";
import HomeSectionContainer from "./HomeSectionContainer";

const WhyChooseEasybank = () => {
  const points = [
    {
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: "/images/icon-online.svg",
      alt: "online banking icon",
    },
    {
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
      icon: "/images/icon-budgeting.svg",
      alt: "budgeting icon",
    },
    {
      title: "Fast Onboarding",
      description:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
      icon: "/images/icon-onboarding.svg",
      alt: "onboarding icon",
    },
    {
      title: "Open API",
      description:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
      icon: "/images/icon-api.svg",
      alt: "open api icon",
    },
  ];
  return (
    <HomeSectionContainer
      bgColor={"bg-neutral-veryLightGray"}
      title="Why choose Easybank?"
      description="We leverage Open Banking to turn your bank account into your financial hub.
Control your finances like never before."
    >
      <div className="flex flex-row mt-10 md:mt-20 flex-wrap gap-y-8">
        {points.map((point, i) => (
          <div
            key={i}
            className="flex flex-col px-4 space-y-8 md:max-w-72 justify-center md:justify-normal items-center md:items-start w-full"
          >
            <Image src={point.icon} alt={point.alt} width={72} height={72} />
            <h3 className="text-2xl text-primary-darkBlue text-center md:text-left">
              {point.title}
            </h3>
            <p className="text-neutral-grayishBlue text-center md:text-left">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </HomeSectionContainer>
  );
};
export default WhyChooseEasybank;
