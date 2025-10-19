"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopButton from "../button-tab-sections/TopButton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Activities = () => {
  const activityImages = [
    "Research",
    "Workshops",
    "Contest",
    "Events",
    "Seminars",
    "Study Sessions",
    "Sports Programs",
  ];

  const route = useRouter();
  return (
    <MaxWidthWrapper>
      <div className="py-7 md:py-20 lg:py-32 relative text-center md:text-start">
        <h1 className="text-2xl md:text-3xl lg:text-5xl">
          ACTIVITIES FOR MEMBERS
        </h1>

        {/* Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7 xl:gap-9 mt-6 md:mt-12 lg:mt-16 mx-auto">
          {activityImages.map((item, index) => {
            return (
              <div
                key={index}
                className="h-12 md:h-[4rem] xl:h-[6rem] flex items-center justify-center bg-gray-400 bg-opacity-5 hover:bg-opacity-20 border border-gray-100/50 rounded-xl shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-sm text-lg md:text-xl xl:text-2xl text-white"
              >
                {item}
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="text-center mt-[3.0625rem] md:mt-16">
          <Button
            variant="secondary"
            className="px-5 md:px-7 md:h-12 md:font-bold md:text-2xl"
            onClick={() => route.push("https://www.facebook.com/nsuacmsc")}
          >
            Become A Member
          </Button>
        </div>

        <TopButton />
      </div>
    </MaxWidthWrapper>
  );
};

export default Activities;
