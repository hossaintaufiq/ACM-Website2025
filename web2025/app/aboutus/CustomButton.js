const CustomButton = ({ text, type }) => {
  return (
    <div>
      {type == "primary" ? (
        <button className="bg-[#2F92D0] hover:bg-[#9747FF] w-[13.8125rem] h-[4rem] rounded-full font-semibold text-[1.25rem]">
          {text}
        </button>
      ) : (
        <button className="bg-white hover:border-[#2F92D0] w-[13.8125rem] h-[4rem] rounded-full text-black border-[3px] border-[#9747FF] font-semibold text-[1.25rem]">
          {text}
        </button>
      )}
    </div>
  );
};

export default CustomButton;
