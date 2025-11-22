import React from 'react';
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// ----------- images ----------

// ------------------------ Web group -----------------
import Tahminuzzaman from "../../app/assets/img/Moderator/Web/Tahminuzzaman_Nahian.webp";
import Saif from "../../app/assets/img/Moderator/Web/Saif_Mohammed.webp";
import Aisha from "../../app/assets/img/Moderator/Web/Aisha_Naziha.webp";
// import Rakib from "../../app/assets/img/Moderator/Web/Abdul Alim Rakib.jpg";



// ------------------------ Admin group -----------------
import Rodela from "../../app/assets/img/Moderator/Admin/Rodela_Chowdhury.webp";
import Tahmidul from "../../app/assets/img/Moderator/Admin/Tahmidul_Islam.webp";
import Jaffry from "../../app/assets/img/Moderator/Admin/Shabab_Sadatain_Jaffry.webp";
// import ATIKUR from "../../app/assets/img/Moderator/Admin/ATIKUR RAHMAN SHAFI_MODERATOR_ADMIN.jpg";



// ------------------------ Cultural group -----------------
import Raisa from "../../app/assets/img/Moderator/Cultural/raisa_zahin.webp";
import Jukta from "../../app/assets/img/Moderator/Cultural/Jukta_Bhowmik.webp";
// import Sudipta from "../../assets/img/Moderator/Cultural/";

// ------------------------ D&D group -----------------
//import Raisa from "";
import Esrat from "../../app/assets/img/Moderator/Design/Esrat_Smriti.webp";
import Nafisa from "../../app/assets/img/Moderator/Design/Nafisa_Tasneem.webp";
//import Amatul from "../../app/assets/img/Moderator/Design/Amatul Odud  Tazrian.jpg";
//import Ismot from "../../app/assets/img/Moderator/Design/Ismot Ara Emu.jpg";

// ------------------------ Photography group -----------------
//import Aneeqah from "../../app/assets/img/Moderator/Photography/Aneeqah Nawar Mimi.jpg";
//import sazid from "../../app/assets/img/Moderator/Photography/sazid_modaretor_provision.jpg";

// ------------------------ Research group -----------------
import Arefin from "../../app/assets/img/Moderator/Research/Arefin_Amin.webp";
import Taufiq from "../../app/assets/img/Moderator/Research/Hossain_Ahmmed_Taufiq.webp";
//import Mohammed from "../../app/assets/img/Moderator/Research/Saif Mohammed.jpg";





const Moderator = () => {
  const teamWeb = [
    {
      name: "Tahminuzzaman Nahian",
      image: Tahminuzzaman,
    },
    {
      name: "Saif Mohammed",
      image: Saif,
    },
    {
      name: "Aisha Naziha",
      image: Aisha,
    },
    // {
    //   name: "Abdul Alim Rakib",
    //   image: Rakib,
    // },
  ]

  const teamAdmin = [
    {
      name: "Rodela Chowdhury",
      image: Rodela,
    },
    {
      name: "Tahmidul Islam",
      image: Tahmidul,
    },
    {
      name: "Shabab Sadatain Jaffry",
      image: Jaffry,
    },
    // {
    //   name: "Atikur Rahman Shafi",
    //   image: ATIKUR,
    // },
  ];


  const teamCultural = [

    {
      name: "Raisa Zahin",
      image: Raisa,
    },
    {
      name: "Jukta Bhowmik",
      image: Jukta,
    },
    

    // {
    //   name: "Sudipta Karmaker",
    //   image: Sudipta,
    // },
  ];
  const teamDesign = [

    {
      name: "Esrat Smriti",
      image: Esrat,
    },
    {
      name: "Nafisa Tasneem",
      image: Nafisa,
    },
    {
      name: "Raisa Zahin",
      image: Raisa,
    }
    // {
    //   name: "Amatul Odud  Tazrian",
    //   image: Amatul,
    // },
    // {
    //   name: "Ismot Ara Emu",
    //   image: Ismot,
    // },
  ];
  const teamPhotography = [

    // {
    //   name: "Aneeqah Nawar Mimi",
    //   image: Aneeqah,
    // },
    // {
    //   name: "Sazid Hasan Shafin",
    //   image: sazid,
    // }
    
  ];
  const teamResearch = [

    {
      name: "Arefin Amin",
      image: Arefin,
    },
    {
      name: "Hossain Ahmmed Taufiq",
      image: Taufiq,
    },


    // {
    //   name: "Saif Mohammed",
    //   image: Mohammed,
    // },
    
  ];

  return (
    <MaxWidthWrapper>
      <div className="py-7 md:py-20 relative text-center md:text-start">
        <h2 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl font-extrabold">MODERATORS</h2>

        {/* ----------------------------- Web Group----------------------- */}

        {/* ----------------------- for single image ----------------- */}

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Web Group</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap text-center'>
            {teamWeb.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    width={256}
                    height={256}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                    loading="lazy"
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
          <div className='flex justify-center items-center justify-evenly flex-wrap'>
            {teamAdmin.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    width={256}
                    height={256}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                    loading="lazy"
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

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Cultural Group</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap'>
            {teamCultural.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    width={256}
                    height={256}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                    loading="lazy"
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
          <div className='flex justify-center items-center justify-evenly flex-wrap'>
            {teamDesign.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    width={256}
                    height={256}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                    loading="lazy"
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
        
        {/* <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Photography & Cinematography Group</h3> */}
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='grid grid-cols-2 md:grid-cols-2 lg:me-20 lg:ms-20 gap-5'>
            {teamPhotography.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    width={256}
                    height={256}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                    loading="lazy"
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

        {/* ----------------------- for single image ----------------- */}

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Research & Development Group</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap text-center'>
            {teamResearch.slice(0).map(({ name, designation, image }, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src={image}
                    width={256}
                    height={256}
                    className="w-64 h-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                    alt={name}
                    loading="lazy"
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

export default Moderator;