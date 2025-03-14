interface IProp {
  title: string;
  subtitle: string;
  description: string;
}

const Explanation = ({ title, subtitle, description }: IProp) => {
  return (
    <div className="text-center">
      <p className="font-inter font-semibold leading-5 sm:leading-6 text-sm sm:text-base text-blue-900 mb-3">
        {subtitle}
      </p>
      <h3 className="font-inter font-semibold leading-[38px] sm:leading-[44px] text-3xl sm:text-4xl text-gray-900 mb-5">
        {title}
      </h3>
      <p className="font-inter font-normal text-gray-600 leading-7 text-lg sm:leading-7.5 sm:text-xl">
        {description}
      </p>
    </div>
  );
};

export default Explanation;
