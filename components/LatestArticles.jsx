import Image from "next/image";
import HomeSectionContainer from "./HomeSectionContainer";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Receive money in any currency with no fees",
      author: "Claire Robinson",
      summary:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      image: "/images/image-currency.jpg",
      alt: "currency image",
    },
    {
      id: 2,
      title: "Treat yourself without worrying about money",
      author: "Wilson Hutton",
      summary:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      image: "/images/image-restaurant.jpg",
      alt: "restaurant image",
    },
    {
      id: 3,
      title: "Take your Easybank card wherever you go",
      author: "Wilson Hutton",
      summary:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      image: "/images/image-plane.jpg",
      alt: "plane image",
    },
    {
      id: 4,
      title: "Our invite-only Beta accounts are now live!",
      author: "By Claire Robinson",
      summary:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
      image: "/images/image-confetti.jpg",
      alt: "confetti image",
    },
  ];

  return (
    <HomeSectionContainer
      bgColor="bg-neutral-veryLightGray"
      title="Latest Articles"
    >
      <div className="flex flex-row mt-10 md:mt-20 flex-wrap gap-y-8 gap-x-5">
        {articles?.map((article) => (
          <div
            key={article.id}
            className="flex flex-col md:max-w-72 justify-center md:justify-normal items-center md:items-start w-full bg-white rounded-lg overflow-hidden"
          >
            <Image
              src={article.image}
              alt={article.alt}
              width={533}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col p-6 space-y-4">
              <p className="text-sm text-neutral-grayishBlue">
                By {article.author}
              </p>
              <h2 className="text-xl font-normal text-primary-darkBlue">
                {article.title}
              </h2>

              <p className="text-neutral-grayishBlue">{article.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </HomeSectionContainer>
  );
};

export default LatestArticles;
