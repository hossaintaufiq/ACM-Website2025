import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// -------------images-----------
import FacultySponsor from "../../assets/img/ex-faculty/Dr Tanzilur Rahman.jpg";
import Chair from "../../assets/img/ex-eb/2022/Abdullah Al Hasan Labib (Chairman).jpg";
import ViceChair from "../../assets/img/ex-eb/2022/Md. Mashruf Ehsan.jpg";
import Secretary from "../../assets/img/ex-eb/2022/Md. Abdullah Al Sayed (Secretary).jpg";
import Treasurer from "../../assets/img/ex-eb/2022/ShafayetRajit.jpg";
import Webmaster from "../../assets/img/ex-eb/2022/Punom.jpg";

const Ex_executive = () => {
    const ex_executivePanel = [
        // {
        //     name: "DR. Tanzilur Rahman",
        //     designation: "Faculty Sponsor",
        //     image: FacultySponsor,
        // },
        {
            name: "Abdullah Al Hasan Labib",
            designation: "Chair",
            image: Chair,
        },
        {
            name: "Md. Mashruf Ehsan",
            designation: "Vice Chair",
            image: ViceChair,
        },
        {
            name: "Md. Abdullah Al Sayed",
            designation: "Secretary",
            image: Secretary,
        },
        {
            name: "Shafayet Rajit",
            designation: "Treasurer",
            image: Treasurer,
        },
        {
            name: "Nazmoon Nahar Punom",
            designation: "Webmaster",
            image: Webmaster,
        },
    ];

    return (
        <MaxWidthWrapper>
            <div className="py-7 md:py-20 lg:py-32 relative text-center md:text-start">
                <h1 className="text-lg mb-20 md:text-2xl lg:text-3xl text-center">Executive Panel 2022</h1>

                {/* Pictures */}
                <div className="flex flex-col mt-10">
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                        {ex_executivePanel.map(({ name, designation, image }, index) => (
                            <div key={index}>
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
};

export default Ex_executive;
