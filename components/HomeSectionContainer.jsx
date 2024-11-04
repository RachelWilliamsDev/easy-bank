const HomeSectionContainer = ({ bgColor, title, description, children }) => {
  return (
    <div className={bgColor}>
      <div className="flex flex-col py-16 lg:py-[110px] px-8 max-w-7xl w-full mx-auto">
        <h2 className="text-center md:text-left text-4xl font-light text-primary-darkBlue mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-center md:text-left text-neutral-grayishBlue mb-6 max-w-[620px]">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
export default HomeSectionContainer;
