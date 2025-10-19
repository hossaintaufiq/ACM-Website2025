"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CustomButton from "../button-tab-sections/CustomButton";
import { Button } from "@/components/ui/button";

const JoinNow = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row items-center justify-around py-7 md:py-10 relative text-center md:text-start">
        <h1 className="text-2xl md:text-3xl lg:text-5xl">
          Want to be a part of us?
        </h1>
        <div className="text-center mt-6">
          <Button
            variant="secondary"
            className="px-[2.5rem] md:px-16 md:h-12 font-bold"
            onClick={() => window.location.href = 'https://www.facebook.com/nsuacmsc'}
          >
            Join Now <span className="pl-3"></span>
          </Button>
          {/* <CustomButton text="Become A Member" type="secondary" /> */}
        </div>
        {/* <div>
          <CustomButton text="Join Now" type="secondary" />
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default JoinNow;
