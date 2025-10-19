import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

const Content = () => {
  return (
    <div>
      {/* banner */}
      <div className="">
        <div>
          <MaxWidthWrapper>
            <div className="py-12 md:py-18">
              <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
                <div>
                  <h1 className="text-primary text-4xl md:text-5xl">
                    NSU ACM Chapter
                  </h1>
                  <h3 className="text-lg md:text-2xl text-[#7A7A7A]">
                    Working in NSU since 2017
                  </h3>
                  <p className="text-sm md:text-lg lg:text-xl xl:text-xl italic text-muted-foreground text-justify mt-6">
                    NSU ACM Student Chapter is one of the 680 chapters around
                    the world and was the first student chapter of the
                    Association for Computing Machineries in Bangladesh. It was
                    officially chartered on 17th January 2017. NSU ACM SC serves
                    the wide scope of ACM to advance computing as a science and
                    profession. One of the signature events of NSU ACM SC is
                    Technovation, which contains versatile competitions for
                    students such as Hackathon, Mobile, and App contest,
                    Megabots Clash, Gaming contest, Robo F1, IT Business Idea
                    Challenge, and so on. Technovation may be considered as a
                    spectacular congregation of incredibly brilliant young
                    minds.
                  </p>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>

      {/* about acm */}
      <div className="w-full bg-gradient-to-br from-tahiti-100 to-tahiti-200">
        <MaxWidthWrapper>
          <div className="py-12 md:py-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-primary text-4xl md:text-5xl">About ACM</h3>
                <p className="text-sm md:text-lg lg:text-xl xl:text-xl italic text-muted-foreground text-justify mt-6 md:mt-10">
                  The Association for Computing Machinery (ACM) is a US-based
                  international learned for computing. It was founded in 1947
                  and is the world's largest scientific and educational
                  computing society. The ACM is a non-profit professional
                  membership group, claiming nearly 100,000 students and
                  professional members as of 2019. Its headquarters are in 1601
                  Broadway, Times Square, New York City. The ACM is an umbrella
                  organization for academic and scholarly interests in computer
                  science (informatics). Its motto is "Advancing Computing as a
                  Science & Profession.”
                </p>

                <p className="text-sm md:text-lg lg:text-xl xl:text-xl italic text-muted-foreground text-justify mt-6 md:mt-10">
                  ACM strengthens the profession's collective voice through
                  strong leadership, promoting the highest standards, and
                  recognizing technical excellence. ACM supports its members'
                  professional growth by providing opportunities for life-long
                  learning, career development, and professional networking. ACM
                  is organized into over 171 local chapters and 37 Special
                  Interest Groups (SIGs), through which it conducts most of its
                  activities. Additionally, there are over 500 college and
                  university chapters. The first student chapter was founded in
                  1961 at the University of Louisiana at Lafayette. ACM also
                  sponsors other computer science-related events such as the
                  worldwide ACM International Collegiate Programming Contest
                  (ICPC) and has sponsored some other events. ACM has made
                  almost all of its publications available to paid subscribers
                  online at its Digital Library and also has a Guide to
                  Computing Literature. Individual members additionally have
                  access to Safari Books Online and Books24x7 literature.
                </p>

                <p className="text-sm md:text-lg lg:text-xl xl:text-xl italic text-muted-foreground text-justify mt-6 md:mt-10">
                  ACM also offers insurance, online courses, and other services
                  to its members. ACM publishes over 50 journals, including the
                  prestigious Journal of the ACM, and two general magazines for
                  computer professionals, Communications of the ACM. It also has
                  an online service called the ACM portal and digital library.
                  ACM Portal is an online service of the ACM. Its core is two
                  main sections: ACM Digital Library and the ACM Guide to
                  Computing Literature. ACM desires to provide an immersive
                  student experience, with an educational program that is
                  associated with the business continuously ACM target to
                  reinforce confidence and mindfulness—giving students the
                  necessary abilities to perceive and accept opportunities. This
                  organization’s primary goal is to empower students to satisfy
                  their potential and fulfill the profession inside the
                  scientific computing industry.
                </p>
                <Button
                  variant="secondary"
                  className="px-[2.9rem] md:px-16 md:h-12 md:font-bold md:text-xl mt-6 md:mt-10"
                >
                  By Laws
                </Button>
              </div>
              <div className="hidden md:flex relative -mt-[170px]  md:justify-end">
                <Image
                  src="/logo.png"
                  className="w-[300px] h-[300px]"
                  width={50}
                  height={50}
                  quality={100}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* nsuacm sc */}
      <div div className="w-full bg-gray-300">
        <MaxWidthWrapper>
          <div className="py-12 md:py-18 text-center md:text-left">
            <div>
              <h1 className="text-primary text-4xl md:text-5xl">
                What is NSU ACM SC?
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
              <div className="">
                <p className="text-sm md:text-lg lg:text-xl italic text-secondary-foreground text-justify mt-6 md:mt-10">
                  One of the signature events of NSU ACM SC is Technovation,
                  which contains versatile competitions for students such as
                  Hackathon, Mobile, and App contest, Megabots Clash, Gaming
                  contest, Robo F1, IT Business Idea Challenge, and so on.
                  Technovation may be considered as a spectacular congregation
                  of incredibly brilliant young minds. There the signature
                  Hackathon of NSU ACM SC, Hack-NSU, which is an excellent
                  opportunity for students and tech enthusiasts alike. It is
                  held at North South University premises, and the program
                  attracts students from various universities all over the
                  country. The event is a part of ACM-SC’s goal to promote and
                  develop fresh minds’ ideas and thoughts and give those ideas a
                  new dimension. It is a massive platform for those who are
                  passionate and searching for an opportunity to showcase their
                  ability to generate new ideas and a new vision. And they also
                  get to take the first steps towards making their ideas and a
                  brighter future for all of us a reality. Another well-known
                  event of ACM is the NSU ACM SC Innovation Challenge, where
                  students in their final year get the opportunity to showcase
                  the project they had built over 8 months using their ideas and
                  skills. In alignment with the Department of Electrical and
                  Computer Engineering of North South University, it aims to
                  assist members of the university community in excelling in
                  computer engineering and computer science. The organization
                  also puts in strenuous efforts in supporting the cause of
                  North South University to produce world-class graduates.
                </p>
              </div>

              <div className="mt-6 md:mt-10 flex justify-center items-center">
                <Image
                  src="/img-2.PNG"
                  className="lg:h-[250px] lg:w-[580px]"
                  width={500}
                  height={500}
                  quality={100}
                  alt="Image 2"
                />
              </div>

              <div>
                <p className="text-sm md:text-lg lg:text-xl italic text-secondary-foreground text-justify mt-6 md:mt-10">
                  Another well-known event of ACM is the NSU ACM SC Innovation
                  Challenge, where students in their final year get the
                  opportunity to showcase the project they had built over 8
                  months using their ideas and skills. In alignment with the
                  Department of Electrical and Computer Engineering of North
                  South University, it aims to assist members of the university
                  community in excelling in computer engineering and computer
                  science. The organization also puts in strenuous efforts in
                  supporting the cause of North South University to produce
                  world-class graduates.
                </p>
              </div>
              <div className="mt-6 md:mt-10 flex justify-center items-center">
                <Image
                  src="/img-3.PNG"
                  className="lg:h-[250px] lg:w-[580px]"
                  width={500}
                  height={500}
                  quality={100}
                  alt="Image 3"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="w-full bg-gradient-to-br from-tahiti-100 to-tahiti-200">
        <MaxWidthWrapper>
          {/* --------------------------- Main team ------------------------ */}
          <div className="py-12 md:py-18 text-center md:text-left">
            <div>
              <h3 className="text-primary text-4xl md:text-5xl">Team</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-4 mt-6 md:mt-10">
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-2xl font-medium text-white text-center my-6">
                  Provision
                </p>
              </div>
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-2xl text-white text-center font-medium my-6">
                  Promotion
                </p>
              </div>
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-2xl text-white text-center font-medium my-6">
                  Publication
                </p>
              </div>
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-2xl text-white text-center font-medium my-6">
                  Corporation
                </p>
              </div>
            </div>
          </div>

          {/* --------------------------- Floating team ------------------------ */}
          <div className="py-12 md:py-18 text-center md:text-left">
            <div>
              <h3 className="text-primary text-4xl md:text-5xl">
                Floating Team
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-4 mt-6 md:mt-10">
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-xl text-white text-center font-medium my-10">
                  Web Group
                </p>
              </div>
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-xl text-white text-center font-medium my-10">
                  Admin Group
                </p>
              </div>
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-xl text-white text-center font-medium my-10">
                  Design & Decor Group
                </p>
              </div>
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-xl text-white text-center font-medium my-10">
                  Research & Development Group
                </p>
              </div>
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-xl text-white text-center font-medium my-10">
                  Cultural Group
                </p>
              </div>
              <div className="rounded-3xl border-white border-2 bg-[#090909] py-4 px-3">
                <p className="text-xl text-white text-center font-medium my-10">
                  Photography & Cinematography Group
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Content;
