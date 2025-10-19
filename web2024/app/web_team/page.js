import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Kiser from "../../app/assets/img/web_page_members/kaiser.jpg";
import Nazibur from "../../app/assets/img/web_page_members/Nazibur.jpg";
import Alim from "../../app/assets/img/web_page_members/Alim.jpg";

import Aminul from "../../app/assets/img/web_page_members/img-1.jpg";
import Arefin from "../../app/assets/img/web_page_members/img-2.jpg";
import Galib from "../../app/assets/img/web_page_members/img-3.jpg";

import Sazid from "../../app/assets/img/web_page_members/img-4.jpg";
import Aisha from "../../app/assets/img/web_page_members/img-5.png";
import Nahian from "../../app/assets/img/web_page_members/img-6.jpg";

import Shakia from "../../app/assets/img/web_page_members/shakia.jpg";
import Rummamil from "../../app/assets/img/web_page_members/rummamil.jpg";

const page = () => {
    const web_team = [
        {
            name: "Ahmed Kiser",
            designation: "Team Leader",
            image: Kiser,
        },
        {
            name: "Sheaikh Nazibur Rahman",
            designation: "Coordinator",
            image: Nazibur,
        },
        {
            name: "Abdul Alim Rakib",
            designation: "Moderator",
            image: Alim,
        },
        {
            name: "Aminul Islam",
            designation: "Member",
            image: Aminul,
        },
        {
            name: "Arefin Amin",
            designation: "Member",
            image: Arefin,
        },
        // {
        //     name: "Asadullah Hil Galib",
        //     designation: "Member",
        //     image: Galib,
        // },
        {
            name: "Sazid Hasan Shafin",
            designation: "Member",
            image: Sazid,
        },
        {
            name: "Aisha",
            designation: "Member",
            image: Aisha,
        },
        {
            name: "Tahminuzzaman Nahian",
            designation: "Member",
            image: Nahian,
        },
        {
            name: "Shakia Tasnim",
            designation: "Member",
            image: Shakia,
        },
        {
            name: "Rummamil Abrar Ifty",
            designation: "Member",
            image: Rummamil,
        },
      ];
    return (

        <MaxWidthWrapper>
            
            <div className="flex flex-col my-20">
            <h1 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl">WEB CONTRIBUTORS</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {web_team
                    .slice(0)
                    .map(({ name, designation, image }, index) => (
                        <div key={index}>
                            <div className="flex flex-col justify-center items-center text-center">
                                <Image
                                src={image}
                                className="w-48 h-64 lg:w-64 lg:h-80 object-cover rounded-lg border-[#9747FF] hover:border-[#2F92D0] border-2"
                                alt={name}
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
        </MaxWidthWrapper>
    );
};

export default page;

