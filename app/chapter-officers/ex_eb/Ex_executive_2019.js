import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// -------------images-----------
import Chair from "../../assets/img/ex-eb/2019/Mahbuba Tasmin.jpg"
import ViceChair from "../../assets/img/ex-eb/2019/Taniz Mahmud Fahim_Membership Chair.jpg"
import Secretary from "../../assets/img/ex-eb/2019/Mahidur Rahman.jpg"
import Treasurer from "../../assets/img/ex-eb/2019/Mostafa Didar.jpg"
import Webmaster from "../../assets/img/ex-eb/2019/Sabbir Mollah.jpg"


const Ex_executive = () => {
    const ex_executivePanel = [

        {
            name: "Mahbuba Tasmin",
            designation: "Chair",
            image: Chair,
        },
        {
            name: "Taniz Mahmud Fahim",
            designation: "Vice Chair",
            image: ViceChair,
        },
        {
            name: "Md. Mahidur Rahman",
            designation: "Secretary",
            image: Secretary,
        },
        {
            name: "Mostafa Didar",
            designation: "Treasurer",
            image: Treasurer,
        },
        {
            name: "Sabbir Mollah",
            designation: "Webmaster",
            image: Webmaster,
        }
    ]

    return (

        <MaxWidthWrapper>
            <div className="py-7 md:py-20 lg:py-2 relative text-center md:text-start mt-28">
                <h1 className="text-lg mb-20 md:text-2xl lg:text-3xl text-center">Executive Panel 2019</h1>

                {/* Pictures */}

                {/* <div className="flex flex-col mt-10"> */}
                {/* <div>
                    <div className={`flex flex-col items-center justify-start mb-[4.19rem]`}>
                        <Image
                            src={ex_executivePanel[0].image}
                            className="w-32 h-32 lg:w-52 lg:h-52 rounded-full border-[#9747FF] hover:border-[#2F92D0] border-2"
                        />
                        <h1 className="text-sm md:text-lg lg:text-xl text-center">
                            {ex_executivePanel[0].name}
                        </h1>
                        <p className="text-[10px] md:text-sm text-muted-foreground italic">
                            {ex_executivePanel[0].designation}
                        </p>
                    </div>
                </div> */}

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
                {/* </div> */}
            </div>
        </MaxWidthWrapper>
    );
}

export default Ex_executive;