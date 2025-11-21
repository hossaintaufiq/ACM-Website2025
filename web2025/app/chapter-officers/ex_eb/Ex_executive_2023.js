import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// -------------images-----------
import Chair from "../../assets/img/ex-eb/2023/Md Saeem Hossain Shanto.png";
import ViceChair from "../../assets/img/ex-eb/2023/Meherun Nessa Maria.png";
import Secretary from "../../assets/img/ex-eb/2023/Tahiat Hakim Himel.jpg";
import MembershipChair from "../../assets/img/ex-eb/2023/Mrittika Sengupta.png";
import Webmaster from "../../assets/img/ex-eb/2023/Rawshan Tabbasum Etika.png";

const Ex_executive = () => {
    const ex_executivePanel = [
        {
            name: "Md Saeem Hossain Shanto",
            designation: "Chair",
            image: Chair,
        },
        {
            name: "Meherun Nessa Maria",
            designation: "Vice Chair",
            image: ViceChair,
        },
        {
            name: "Tahiat Hakim Himel",
            designation: "Secretary & Treasurer",
            image: Secretary,
        },
        {
            name: "Mrittika Sengupta",
            designation: "Membership Chair",
            image: MembershipChair,
        },
        {
            name: "Rawshan Tabbasum Etika",
            designation: "Webmaster",
            image: Webmaster,
        },
    ];

    return (
        <MaxWidthWrapper>
            <div className="py-7 md:py-20 lg:py-32 relative text-center md:text-start">
                <h1 className="text-lg mb-20 md:text-2xl lg:text-3xl text-center">Executive Panel 2023</h1>

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
