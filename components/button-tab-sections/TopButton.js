import { BsChevronUp } from "react-icons/bs";

const TopButton = () => {
  return (
      <a href="#top" className="flex justify-end">
        <button className="w-8 md:w-[2.5rem] h-8 md:h-[2.5rem] bg-[#215AD7] rounded-full flex items-center justify-center text-sm md:text-2xl">
          <BsChevronUp />
        </button>
      </a>
  );
};

export default TopButton;
