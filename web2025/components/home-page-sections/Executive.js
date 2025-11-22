"use client";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import TopButton from "../button-tab-sections/TopButton";

// ----------- images ----------
// import FacultySponsor from "../../app/assets/img/Faculty Sponsor/Dr.Shazzad Hosain.jpg";
// import FacultySponsor from "../../app/assets/img/EXECUTIVE PANEL/MuhammadShafayatOshman (2).jpg";
import FacultySponsor from "../../app/assets/img/EXECUTIVE PANEL/FacultySponsor.webp";
import Chair from "../../app/assets/img/EXECUTIVE PANEL/saroar.jpg";
import ViceChair from "../../app/assets/img/EXECUTIVE PANEL/Tamjid.jpg";
import Secretary from "../../app/assets/img/EXECUTIVE PANEL/Shafi.jpg";
import Treasurer from "../../app/assets/img/EXECUTIVE PANEL/Meherun Nesa Esha.jpeg";
import MembershipChair from "../../app/assets/img/EXECUTIVE PANEL/Noshin.JPG";
import Webmaster from "../../app/assets/img/EXECUTIVE PANEL/Mubashshira.png";
import { useRouter } from "next/navigation";

const Executive = () => {
  const executivePanel = [
    {
      // name: "Muhammad Shafayat Oshman",
      name: "Ms. Silvia Ahmed",
      designation: "Faculty Sponsor",
      image: FacultySponsor,
    },
    {
      name: "MD. Saroar Mahmud",
      designation: "Chair",
      image: Chair,
    },
    {
      name: "Tamjidul Islam",
      designation: "Vice Chair",
      image: ViceChair,
    },
    {
      name: "Md. Atikur Rahman Shafi",
      designation: "Secretary",
      image: Secretary,
    },
    {
      name: "Meherun Nesa Esha",
      designation: "Treasurer",
      image: Treasurer,
    },
    {
      name: "Noshin Nawar",
      designation: "Membership Chair",
      image: MembershipChair,
    },
    {
      name: "Mubashshira Kaisar",
      designation: "Webmaster",
      image: Webmaster,
    },
  ];

  const route = useRouter();

  return (
    <MaxWidthWrapper>
      <div className="py-7 md:py-20 relative text-center md:text-start">
        <h1 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl">
          EXECUTIVE PANEL
        </h1>

        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div>
            <div
              className={`flex flex-col items-center justify-start mb-[4.19rem]`}
            >
              <Image
                src={executivePanel[0].image}
                width={256}
                height={256}
                className="w-64 h-64 object-contain bg-[#d9c79f] rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                alt={executivePanel[0].name}
                loading="lazy"
              />
              <h1 className="text-sm md:text-lg lg:text-xl text-center mt-2">
                {executivePanel[0].name}
              </h1>
              <p className="text-[10px] md:text-sm text-muted-foreground italic">
                {executivePanel[0].designation}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {executivePanel
              .slice(1)
              .map(({ name, designation, image }, index) => (
                <div key={index}>
                  <div className="flex flex-col justify-center items-center text-center">
                    <Image
                      src={image}
                      width={256}
                      height={256}
                      className="aspect-square w-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                      alt={name}
                      loading="lazy"
                    />
                    <h1 className="text-sm md:text-lg lg:text-xl mt-2">
                      {name}
                    </h1>
                    <p className="text-[10px] md:text-sm text-muted-foreground italic">
                      {designation}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-[3.0625rem]">
          <Button
            variant="secondary"
            className="px-5 md:px-7 md:h-12 md:font-bold md:text-2xl"
            onClick={() => Route.push("https://www.facebook.com/nsuacmsc")}
          >
            Become A Member
          </Button>
        </div>

        {/* Top Button */}
        <TopButton />
      </div>
    </MaxWidthWrapper>
  );
};

export default Executive;
