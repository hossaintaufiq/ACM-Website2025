import React from 'react';
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// ----------- images ----------

// ---------------------------- corporation team ------------------------
import Sudipta from "../../app/assets/img/Sub-eb/Corporate/Sudipta_Karmaker.webp";
import Atahar from "../../app/assets/img/Sub-eb/Corporate/Atahar_Hossain.webp";
import Rayta from "../../app/assets/img/Sub-eb/Corporate/Rayta_Binte_Noor.webp"; 
// import Meherun from "../../app/assets/img/Sub-eb/Corporation/Meherun Nesa Esha (2).jpg";
// import Ayon from "../../app/assets/img/Sub-eb/Corporation/Sadman Sakib Ayon.jpg";

// ---------------------------- promotion team ------------------------
import Arefin from "../../app/assets/img/Sub-eb/Promotion/Arefin_Amin.webp";
import Tamzidur from "../../app/assets/img/Sub-eb/Promotion/Khondker_Tamzidur_Rahman.webp";
import Afrida from "../../app/assets/img/Sub-eb/Promotion/Afrida_Hossain.webp";
import Faisal from "../../app/assets/img/Sub-eb/Promotion/Abdullah_Al_Moashin_Faisal.webp"; 
// import Shadhin from "../../app/assets/img/Sub-eb/Promotion/Tahshan Jamil Shadhin.jpg";
// import Mubassira from "../../app/assets/img/Sub-eb/Promotion/Mubashshira Kaisar Safita.jpg";


// ---------------------------- provision team ------------------------
import Efty from "../../app/assets/img/Sub-eb/Provision/Arafat_Rahat_Efty.webp";
import Sazid from "../../app/assets/img/Sub-eb/Provision/Sazid_Hasan.webp";
import Tayeeb from "../../app/assets/img/Sub-eb/Provision/ASM_Tayeeb.webp";
import Sajid from "../../app/assets/img/Sub-eb/Provision/Sajid_Rahman_ACM.webp";
import Adrito from "../../app/assets/img/Sub-eb/Provision/Adrito_Bhuiyan.webp"; 
// import Saroar from "../../app/assets/img/Sub-eb/Provision/Saroar_provision_sub-eb.jpg";
// import Zahid from "../../app/assets/img/Sub-eb/Provision/Zahid Al-Razin.jpg";
// import Myesha from "../../app/assets/img/Sub-eb/Provision/Myesha_Tabassum_Sub-EB_Team_Provision.jpg";
// import Samir from "../../app/assets/img/Sub-eb/Provision/Mohammed_Sadman_Ali_Samir.jpg";
// import Tamjidul from "../../app/assets/img/Sub-eb/Provision/Tamjidul Islam.webp";


// ---------------------------- publication team ------------------------
import Nafisa from "../../app/assets/img/Sub-eb/Publication/Nafisa_Tabassum.webp"; 
import Raisa from "../../app/assets/img/Sub-eb/Publication/Raisa_Zahin.webp"; 
//import Mubtasim from "../../app/assets/img/Sub-eb/Publication/Muhammad Mubtasim Rahman.jpg";






const SubExecutive = () => {
  const teamCorporate = [
    {
      name: "Sudipta Karmaker",
      image: Sudipta,
    },
    {
      name: "Atahar Hossain",
      image: Atahar,
    },
    {
      name: "Rayta Binte Noor",
      image: Rayta,
    },
    // {
    //   name: "Meherun Nesa Esha",
    //   image: Meherun,
    // },
    // {
    //   name: "Sadman Sakib Ayon",
    //   image: Ayon,
    // }
  ];

  const teamPromotion = [
    {
      name: "Arefin Amin",
      image: Arefin,
    },
    {
      name: "Khondker Tamzidur Rahman",
      image: Tamzidur,
    },
    {
      name: "Afrida Hossain",
      image: Afrida,
    },
    {
      name: "Abdullah Al Moashin Faisal",
      image: Faisal,
    },
    // {
    //   name: "Tahshan Jamil Shadhin",
    //   image: Shadhin,
    // },
    // {
    //   name: "Mubashshira Kaisar Safita",
    //   image: Mubassira,
    // }
  ]

  const teamProvision = [
    {
      name: "Arafat Rahat Efty",
      image: Efty,
    },
    {
      name: "Sazid Hasan",
      image: Sazid,
    },
    {
      name: "ASM Tayeeb",
      image: Tayeeb,
    },
    {
      name: "Sajid Rahman",
      image: Sajid,
    },
    {
      name: "Adrito Bhuiyan",
      image: Adrito,
    },
    // {
    //   name: "Saroar Mahmud",
    //   image: Saroar
    // },
    // {
    //   name: "Tamjidul Islam",
    //   image: Tamjidul
    // },
    // {
    //   name: "Zahid Al-Razin",
    //   image: Zahid
    // },
    // {
    //   name: "Myesha Tabassum",
    //   image: Myesha
    // },
    // {
    //   name: "Mohammed Sadman Ali Samir",
    //   image: Samir,
    // },
  ]

  const teamPublication = [

    {
      name: "Nafisa Tabassum",
      image: Nafisa,
    },
    {
      name: "Raisa Zahin",
      image: Raisa,
    },
    // {
    //   name: "Anindo Jaman",
    //   image: Anindo
    // },
    // {

    // }
  ]
  return (
    <MaxWidthWrapper>
      <div className="py-7 md:py-20 relative text-center md:text-start">
        <h2 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl font-extrabold">SUB-EXECUTIVES</h2>

        {/* ----------------------------- corporation ----------------------- */}

        {/* ----------------------------- for two images -------------------- */}

        <h3 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl">Team Corporate</h3>

        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap'>
            {teamCorporate.slice(0).map(({ name, designation, image }, index) => (
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

        {/* ----------------------------- Promotion ----------------------- */}

        {/*--------------------------Only for Single Images-----------------*/}
        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Team Promotions</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap text-center'>
            {teamPromotion.slice(0).map(({ name, designation, image }, index) => (
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

        {/* ----------------------------- Provision ----------------------- */}

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Team Provision</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            {teamProvision.slice(0).map(({ name, designation, image }, index) => (
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

        {/* ----------------------------- Publication ----------------------- */}

        {/* ------------------------ for single image --------------------- */}

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">Team Publications</h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='flex justify-center items-center justify-evenly flex-wrap text-center'>
            {teamPublication.slice(0).map(({ name, designation, image }, index) => (
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



      </div>
    </MaxWidthWrapper>
  );
};

export default SubExecutive;