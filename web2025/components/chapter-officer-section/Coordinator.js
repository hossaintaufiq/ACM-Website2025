import React from 'react';
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// ----------- images ----------

// ------------------------ Web group -----------------
import Arefin from "../../app/assets/img/Coordinator/Web/Arefin_Amin.webp";
import Taufiq from "../../app/assets/img/Coordinator/Web/Hossain_Ahmmed_Taufiq.webp";
// import Nazib from "../../app/assets/img/Coordinator/Web/Sheaikh Nazibur Rahman.jpg";

// ------------------------ Admin group -----------------
import Shafaat from "../../app/assets/img/Coordinator/Admin/Shafaat_Bin_Zaman.webp";
import Adrito from "../../app/assets/img/Coordinator/Admin/Adrito_Bhuiyan.webp";
// import Samir from "../../app/assets/img/Coordinator/Admin/Mohammed_Sadman_Ali_Samir.jpg";

// ------------------------ Cultural group -----------------
//import Shafaat from "../../app/assets/img/Coordinator/Cultural/Shafaat_Bin_Zaman.png";
import Nipa from "../../app/assets/img/Coordinator/Cultural/Humayra_Rahman_Nipa.webp";
import Musfika from "../../app/assets/img/Coordinator/Cultural/Sheikh_Musfika_Lowrin.webp";
import SaifAhmed from "../../app/assets/img/Coordinator/Cultural/Saif_Ahmed.webp";
// import Sudipta from "../../app/assets/img/Coordinator/Cultural/Sudipta Karmaker (2).jpg";

// ------------------------ D&D group -----------------
//import Musfika from "";
import Rafia from "../../app/assets/img/Coordinator/Design/Rafia_Ferdous_Duti.webp";
import Afia from "../../app/assets/img/Coordinator/Design/Afia_Zaheen.webp";
// import Aneeqah from "../../app/assets/img/Coordinator/Design/Aneeqah Nawar Mimi.jpg";
// import uma from "../../app/assets/img/Coordinator/Design/uma banik.jpg";

// ------------------------ M&D group -----------------
import Tamzidur from "../../app/assets/img/Coordinator/M&D/Khondker_Tamzidur_Rahman.webp";
import Albid from "../../app/assets/img/Coordinator/M&D/Albid_Nawar.webp";
// import ayon from "../../app/assets/img/Coordinator/Photography/Sadman Sakib ayon.jpg";
// import ayon from "../../app/assets/img/Coordinator/Photography/SadmanSakibayon.png";
// import Shadhin from "../../app/assets/img/Coordinator/Photography/Tahshan Jamil Shadhin.jpg";


// ------------------------ Research group -----------------
import AlMustafiz from "../../app/assets/img/Coordinator/R&D/Al_Mustafiz_Bappy.webp";
import Fatema from "../../app/assets/img/Coordinator/R&D/Fatema_Tabassum_Elma.webp";
import Saif from "../../app/assets/img/Coordinator/R&D/Saif_Mohammed.webp";
// import ayon from "../../assets/img/Coordinator/Reseach/";





const Coordinator = () => {
  const teamWeb = [

    {
        name: "Arefin Amin",
        image: Arefin,
    },
    {
        name: "Hossain Ahmmed Taufiq",
        image: Taufiq,
    },
    // {
    //   name: "Sheaikh Nazibur Rahman",
    //   image: Nazib,
    // },
  ]
  const teamAdmin = [

    {
        name: "Shafaat Bin Zaman",
        image: Shafaat,
    },
    {
        name: "Adrito Bhuiyan",
        image: Adrito,
    },
    
    // {
    //   name: "Mohammed Sadman Ali Samir",
    //   image: Samir,
    // },
  ];
  const teamCultural = [

    {
        name: "Humayra Rahman Nipa",
        image: Nipa,
    },
    {
        name: "Sheikh Musfika Lowrin",
        image: Musfika,
    },
    {
        name: "Saif Ahmed",
        image: SaifAhmed,
    },
    {
        name: "Shafaat Bin Zaman",
        image: Shafaat,
    },

    // {
    //   name: "Sudipta Karmaker",
    //   image: Sudipta,
    // },
  ];
  const teamDesign = [
    {
        name: "Rafia Ferdous Duti",
        image: Rafia,
    },
    {
        name: "Afia Zaheen",
        image: Afia,
    },
    // {
    //   name: "Aneeqah Nawar Mimi",
    //   image: Aneeqah,
    // },
    // {
    //   name: "Uma Banik",
    //   image: uma,
    // }
  ];
  const teamPhotography = [

    {
        name: "Khondker Tamzidur Rahman",
        image: Tamzidur,
    },
    {
        name: "Albid Nawar",
        image: Albid,
    },
    // {
    //   name: "Sadman Sakib Ayon",
    //   image: ayon,
    // },
    // {
    //   name: "Tahshan Jamil Shadhin",
    //   image: Shadhin,
    // }
    
  ];
  const teamResearch = [

      {
        name: "Al Mustafiz Bappy",
        image: AlMustafiz,
      },
      {
        name: "Fatema Tabassum Elma",
        image: Fatema,
      },
      {
        name: "Saif Mohammed",
        image: Saif,
      },
    
  ];

  return (
    <MaxWidthWrapper>
      <div className="py-7 md:py-20 relative text-center md:text-start">
        <h2 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl font-extrabold">COORDINATORS</h2>

        {/* ----------------------------- Web Group----------------------- */}
        
        {/* ---------------------------- for single image ---------------- */}
        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Web Group</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap text-center'>
            {teamWeb.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                  />
                  <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                  <p className="text-[10px] md:text-sm text-muted-foreground italic">
                    {designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------- Admin ----------------------- */}

        {/* ----------------------- for single image ----------------- */}
        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Admin Group</h3>

        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap text-center'>
            {teamAdmin.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                  />
                  <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                  <p className="text-[10px] md:text-sm text-muted-foreground italic">
                    {designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------- Cultural Group ----------------------- */}


        {/* ----------------------- for single image ----------------- */}
        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Cultural Group</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap text-center'>
            {teamCultural.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                  />
                  <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                  <p className="text-[10px] md:text-sm text-muted-foreground italic">
                    {designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------- Design & Decoration ----------------------- */}


        {/* ----------------------------- for two images ----------------------------- */}

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Design & Decor Group</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='grid grid-cols-2 md:grid-cols-2 lg:me-20 lg:ms-20 gap-5'>
            {teamDesign.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    className="aspect-square w-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                  />
                  <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                  <p className="text-[10px] md:text-sm text-muted-foreground italic">
                    {designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------- Photography Group----------------------- */}

        {/* ----------------------------- for two images ----------------------------- */}

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Media & Documentation Group</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='grid grid-cols-2 md:grid-cols-2 lg:me-20 lg:ms-20 gap-5'>
            {teamPhotography.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    className="aspect-square w-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                  />
                  <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                  <p className="text-[10px] md:text-sm text-muted-foreground italic">
                    {designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ----------------------------- Research & Development Group----------------------- */}
        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Research & Development Group</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            {teamResearch.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    className="aspect-square w-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                  />
                  <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                  <p className="text-[10px] md:text-sm text-muted-foreground italic">
                    {designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MaxWidthWrapper>
  );
};

export default Coordinator;