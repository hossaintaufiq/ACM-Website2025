import CustomButton from "../../components/button-tab-sections/CustomButton";

const JoinNow = () => {
  return (
    <div className="h-[13.125rem] bg-[#2F92D0] mt-[7.5625rem] px-[10%] flex items-center justify-around">
      <h1 className="font-bold text-[3rem]">Want to be a part of us?</h1>
      <div>
        <CustomButton text="Join Now" type="secondary" />
      </div>
    </div>
  );
};

export default JoinNow;
