interface IProp {
  text: string;
}

const Title = ({ text }: IProp) => {
  return (
    <div className="text-gray-900 font-inter font-semibold text-2xl leading-8">
      {text}
    </div>
  );
};

export default Title;
