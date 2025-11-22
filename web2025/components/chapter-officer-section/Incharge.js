import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// ----------- images ----------

// ---------------------------- corporation team ------------------------
import Anindo from "../../app/assets/img/Incharge/Corporate/Anindo_Kumar_Biswas.webp";
import AlMustafiz from "../../app/assets/img/Incharge/Corporate/Al_Mustafiz_Bappy.webp";
import Augustine from "../../app/assets/img/Incharge/Corporate/Augustine_Gomes.webp";
import Arif from "../../app/assets/img/Incharge/Corporate/Arif_Faysal_Shakib.webp";
// import Anisa from "../../app/assets/img/Incharge/Corporation/Anisa Akter Meem_corporate..jpg";

// ---------------------------- promotion team ------------------------
import Shafin from "../../app/assets/img/Incharge/Promotion/Shafin_Raiyan.webp";
import Tahminuzzaman from "../../app/assets/img/Incharge/Promotion/Tahminuzzaman_Nahian.webp";
import Zahin from "../../app/assets/img/Incharge/Promotion/Syed_Shadman_Zahin.webp";
import Aminul from "../../app/assets/img/Incharge/Promotion/Aminul Islam.webp";
import Siam from "../../app/assets/img/Incharge/Promotion/G._M._Siam.webp";
// import Aneeqah from "../../app/assets/img/Incharge/Promotion/Aneeqah Nawar Mimi.jpg";
// import Arefin from "../../app/assets/img/Incharge/Promotion/Arefin_Amin.jpg";
// import kjraisa from "../../app/assets/img/Incharge/Promotion/kjraisa.jpg";

// ---------------------------- provision team ------------------------
import Shafi from "../../app/assets/img/Incharge/Provision/Adnan_Shafi.webp";
import Sadik from "../../app/assets/img/Incharge/Provision/Ahmed_As_Sadik.webp";
import Ananto from "../../app/assets/img/Incharge/Provision/Ahnaf_Tahmid_Ananto.webp";
import Nipa from "../../app/assets/img/Incharge/Provision/Humayra_Rahman_Nipa.webp";
import Sanjana from "../../app/assets/img/Incharge/Provision/Sanjana_Absar.webp";
import Shafaat from "../../app/assets/img/Incharge/Provision/Shafaat_Bin_Zaman.webp";
import Jaffry from "../../app/assets/img/Incharge/Provision/Shabab_Sadatain_Jaffry.webp";
import Ruba from "../../app/assets/img/Incharge/Provision/Tahira_Islam_Ruba.webp";
import Tahmidul from "../../app/assets/img/Incharge/Provision/Tahmidul_Islam .webp";
import Zaima from "../../app/assets/img/Incharge/Provision/Zaima_Hossain.webp";
// import ATIKUR from "../../app/assets/img/Incharge/Provision/ATIKUR RAHMAN SHAFI_INCHARGE_PROVISION.jpg";
// import Ismot from "../../app/assets/img/Incharge/Provision/Ismot Ara Emu.jpg";
// import Khondker from "../../app/assets/img/Incharge/Provision/Khondker Tamzidur Rahman_Incharge_Provision.jpg";
// import Arafat from "../../app/assets/img/Incharge/Provision/Md. Arafat Rahat Efty.jpg";
// import Awsaf from "../../app/assets/img/Incharge/Provision/Mohammad Wajih Awsaf.jpg";
// import Saad from "../../app/assets/img/Incharge/Provision/Muhammad Saad.jpg";
// import Tasfiah from "../../app/assets/img/Incharge/Provision/Tasfiah Hossain Lamia.jpg";
// import Tayeeb from "../../app/assets/img/Incharge/Provision/Tayeeb.jpg";
// import uma from "../../app/assets/img/Incharge/Provision/uma banik.jpg";

// ---------------------------- publication team ------------------------
import Tasmia from "../../app/assets/img/Incharge/Publication/Tasmia_Ferdous.webp";
import Pushpita from "../../app/assets/img/Incharge/Publication/Ilhum_Rahman_Pushpita.webp";
import Ifaz from "../../app/assets/img/Incharge/Publication/Abdullah_Nur_Ifaz.webp";
import Aisha from "../../app/assets/img/Incharge/Publication/Aisha_Naziha.webp";
// import Amatul from "../../app/assets/img/Incharge/Publication/Amatul Odud Tazrian.jpg";
// import Noshin from "../../app/assets/img/Incharge/Publication/Noshin_Nawar.jpg";
// import Nafisa from "../../app/assets/img/Incharge/Publication/Nafisa Tabassum .jpg";

const Incharge = () => {
  const teamCorporate = [
    {
      name: "Anindo Kumar Biswas",
      image: Anindo,
    },
    {
      name: "Al Mustafiz Bappy",
      image: AlMustafiz,
    },
    {
      name: "Augustine Gomes",
      image: Augustine,
    },
    {
      name: "Arif Faysal Shakib", 
      image: Arif,
    },
    // {
    //   name: "Anisa Akter Meem",
    //   image: Anisa,
    // },
  ];
  const teamPromotion = [
    {
      name: "Shafin Raiyan",
      image: Shafin,
    },
    {
      name: "Tahminuzzaman Nahian",
      image: Tahminuzzaman,
    },
    {
      name: "Syed Shadman Zahin",
      image: Zahin,
    },
    {
      name: "Aminul Islam",
      image: Aminul,
    },
    {
      name: "G. M. Siam",
      image: Siam,
    },
    // {
    //   name: "Aneeqah Nawar Mimi",
    //   image: Aneeqah,
    // },
    // {
    //   name: "Arefin Amin",
    //   image: Arefin,
    // },
    // {
    //   name: "KJ Raisa",
    //   image: kjraisa,
    // },
  ];
  const teamProvision = [

    {
      name: "Adnan Shafi",
      image: Shafi,
    },
    {
      name: "Ahmed As Sadik",
      image: Sadik,
    },
    {
      name: "Ahnaf Tahmid Ananto",
      image: Ananto,
    },
    {
      name: "Humayra Rahman Nipa",
      image: Nipa,
    },
    {
      name: "Sanjana Absar",
      image: Sanjana,
    },
    {
      name: "Shafaat Bin Zaman",
      image: Shafaat,
    },
    {
      name: "Shabab Sadatain Jaffry",
      image: Jaffry,
    },
    {
      name: "Tahira Islam Ruba",
      image: Ruba,
    },
    {
      name: "Tahmidul Islam",
      image: Tahmidul,
    },
    {
      name: "Zaima Hossain",
      image: Zaima,
    },

    // {
    //   name: "Atikur Rahman Shafi",
    //   image: ATIKUR,
    // },
    // {
    //   name: "Ismot Ara Emu",
    //   image: Ismot,
    // },
    // {
    //   name: "Khondker Tamzidur Rahman",
    //   image: Khondker,
    // },
    // {
    //   name: "Md. Arafat Rahat Efty",
    //   image: Arafat,
    // },
    // {
    //   name: "Mohammad Wajih Awsaf",
    //   image: Awsaf,
    // },
    // {
    //   name: "Muhammad Saad",
    //   image: Saad,
    // },
    // {
    //   name: "Tasfiah Hossain Lamia",
    //   image: Tasfiah,
    // },
    // {
    //   name: "Asm Tayeeb",
    //   image: Tayeeb,
    // },
    // {
    //   name: "Uma Banik",
    //   image: uma,
    // },
  ];
  const teamPublication = [
    {
      name: "Tasmia Ferdous ",
      image: Tasmia,
    },
    {
      name: "Ilhum Rahman Pushpita",
      image: Pushpita,
    },
    {
      name: "Abdullah Nur Ifaz",
      image: Ifaz,
    },
    {
      name: "Aisha Naziha",
      image: Aisha,
    }
    // {
    //   name: "Amatul Odud Tazrian",
    //   image: Amatul,
    // },
    // {
    //   name: "Noshin Nawar",
    //   image: Noshin,
    // },
    // {
    //   name: "Nafisa Tabassum",
    //   image: Nafisa,
    // },
  ];

  return (
    <MaxWidthWrapper>
      <div className="py-7 md:py-20 relative text-center md:text-start">
        <h2 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl font-extrabold">
          INCHARGES
        </h2>

        {/* ----------------------------- corporation ----------------------- */}

        {/* ----------------------- for single image ----------------- */}

        <h3 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl">
          Team Corporate
        </h3>

        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className="flex justify-center items-center justify-evenly flex-wrap text-center">
            {teamCorporate
              .slice(0)
              .map(({ name, designation, image }, index) => (
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


        {/* ----------------------------- Promotion ----------------------- */}
        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">
          Team Promotions
        </h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {teamPromotion
              .slice(0)
              .map(({ name, designation, image }, index) => (
                <div key={index}>
                  <div className="flex flex-col justify-center items-center text-center">
                    <Image
                      src={image}
                      className="aspect-square w-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
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

        
        {/* ----------------------------- Provision ----------------------- */}

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">
          Team Provision
        </h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {teamProvision
              .slice(0)
              .map(({ name, designation, image }, index) => (
                <div key={index}>
                  <div className="flex flex-col justify-center items-center text-center">
                    <Image
                      src={image}
                      className="aspect-square w-64 lg:w-64 lg:h-64 object-cover rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
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

        {/* ----------------------------- Publication ----------------------- */}

        <h3 className="text-lg text-center mt-28 mb-20 md:text-3xl lg:text-5xl">
          Team Publications
        </h3>
        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className="flex justify-center items-center justify-evenly flex-wrap">
            {teamPublication
              .slice(0)
              .map(({ name, designation, image }, index) => (
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

        
      </div>
    </MaxWidthWrapper>
  );
};

export default Incharge;
