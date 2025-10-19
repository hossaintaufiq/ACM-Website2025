import Image from "next/image";
import React from "react";

import recruitment_laptop from "../assets/img/recruitment/summer_24_recruitment_laptop.png";
import recruitment_laptop2 from "../assets/img/recruitment/recruiment_summer_24_laptop_2.png";
import recruitment_phone from "../assets/img/recruitment/summer_24_recruitment_phone.png";
import recruitment_phone2 from "../assets/img/recruitment/recruiment_summer_24_phone_2.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const page = () => {
  return (
    <>
      {/* <MaxWidthWrapper> */}
      <div className="flex justify-center gap-7 my-5 sticky top-0">
        <button className="bg-blue-800 px-5 py-3 rounded-md">Explore Us</button>
        <button className="bg-blue-800 px-5 py-3 rounded-md">Join Now</button>
      </div>
      
      <div className="hidden md:block pb-28">
        <Image src={recruitment_laptop} className="w-full h-full" />
        <Image src={recruitment_laptop2} className="w-full h-full" />
      </div>
      <div className="md:hidden">
        <Image src={recruitment_phone} className="w-full h-full" />
        <Image src={recruitment_phone2} className="w-full h-full" />
      </div>
      {/* </MaxWidthWrapper> */}
    </>
  );
};

export default page;
