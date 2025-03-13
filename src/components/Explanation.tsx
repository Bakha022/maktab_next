interface IProp {
  title: string;
  subtitle: string;
  description: string;
}

const Explanation = ({ title, subtitle, description }: IProp) => {
  return (
    <div className="text-center">
      <p className="font-inter font-semibold leading-6 text-base text-blue-900 mb-3">
        {subtitle}
      </p>
      <h3 className="font-inter font-semibold leading-[44px] text-4xl text-gray-900 mb-5">
        {title}
      </h3>
      <p className="font-inter font-normal text-gray-600 leading-7.5 text-xl">
        {description}
      </p>
    </div>
  );
};

export default Explanation;
