// import Image from "next/image";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// // -------------images-----------
// import Tanzilur from "../../assets/img/ex-faculty/Dr Tanzilur Rahman.jpg"
// import Syed from "../../assets/img/ex-faculty/syed athar bin amir.jpg"
// import Zunayeed from "../../assets/img/ex-faculty/Mr Zunayeed Bin Zahir (ZbZ).jpg"
// import Shazzad from "../../assets/img/ex-faculty/Dr.Shazzad Hosain.jpg"


// const ExFacultySponsor = () => {
//     const ex_executivePanel = [
//         {
//             name: "DR. TANZILUR RAHMAN (TnR)",
//             designation: "(2021-2023)",
//             image: Tanzilur,
//         },
//         {
//             name: "Mr. Syed Athar Bin Amir (saa3)",
//             designation: "(2018-2021)",
//             image: Syed,
//         },
//         {
//             name: "Mr Zunayeed Bin Zahir (ZbZ)",
//             designation: "(2017-2018)",
//             image: Zunayeed,
//         },
//         {
//             name: "Dr. Shazzad Hossain (SZZ)",
//             designation: "(2016-2017)",
//             image: Shazzad,
//         }
//     ]

//     return (

//         <MaxWidthWrapper>
//             <div className="py-7 md:py-20 lg:py-2 relative text-center md:text-start mt-28">
//                 <h1 className="text-lg mb-20 md:text-2xl lg:text-3xl text-center">Ex-Faculty Sponsor</h1>

//                 {/* Pictures */}

//                 <div className="flex flex-col mt-10">
//                     <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
//                         {ex_executivePanel.map(({ name, designation, image }, index) => (
//                             <div key={index}>
//                                 <div className="flex flex-col justify-center items-center text-center">
//                                     <div className="relative w-64 h-64 lg:w-64 lg:h-80 rounded-lg overflow-hidden border-[#9747FF] hover:border-[#2F92D0] border-2">
//                                         <Image
//                                             src={image}
//                                             alt={name}
//                                             layout="fill"
//                                             objectFit="cover"
//                                         />
//                                     </div>
//                                     <div className="mt-2">
//                                         <h1 className="text-sm md:text-lg lg:text-xl">{name}</h1>
//                                         <p className="text-[10px] md:text-sm text-muted-foreground italic">{designation}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/* </div> */}
//             </div>
//         </MaxWidthWrapper>
//     );
// }

// export default ExFacultySponsor;
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// -------------images-----------
import Tanzilur from "../../assets/img/ex-faculty/Dr Tanzilur Rahman.jpg";
import Syed from "../../assets/img/ex-faculty/syed athar bin amir.jpg";
import Zunayeed from "../../assets/img/ex-faculty/Mr Zunayeed Bin Zahir (ZbZ).jpg";
import Shazzad from "../../assets/img/ex-faculty/Dr.Shazzad Hosain.jpg";

const ExFacultySponsor = () => {
  const ex_executivePanel = [
    {
      name: "DR. TANZILUR RAHMAN (TnR)",
      designation: "(2021-2023)",
      image: Tanzilur,
    },
    {
      name: "Mr. Syed Athar Bin Amir (saa3)",
      designation: "(2018-2021)",
      image: Syed,
    },
    {
      name: "Mr Zunayeed Bin Zahir (ZbZ)",
      designation: "(2017-2018)",
      image: Zunayeed,
    },
    {
      name: "Dr. Shazzad Hossain (SZZ)",
      designation: "(2016-2017) & (2023-2024)",
      image: Shazzad,
    }
  ];

  return (
    <MaxWidthWrapper>
      <div className="py-7 md:py-20 lg:py-2 relative text-center md:text-start mt-28 my-20">
        <h1 className="text-lg mb-20 md:text-2xl lg:text-3xl text-center">Ex-Faculty Sponsor</h1>

        {/* Pictures */}
        <div className="flex flex-col mt-10">
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            {ex_executivePanel.map(({ name, designation, image }, index) => (
              <div key={index} className={name.includes("Shazzad Hossain") ? "col-span-2 md:col-span-1 md:col-start-2" : ""}>
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="relative w-64 h-64 lg:w-64 lg:h-80 rounded-lg overflow-hidden border-[#9747FF] hover:border-[#2F92D0] border-2">
                    <Image
                      src={image}
                      alt={name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="text-sm md:text-lg lg:text-xl">{name}</h1>
                    <p className="text-[10px] md:text-sm text-muted-foreground italic">{designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default ExFacultySponsor;
