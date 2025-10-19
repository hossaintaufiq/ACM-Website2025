
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// Images
import Secretary from "../../assets/img/ex-eb/acting2023-24/Tahiat Hakim Himel.jpg";
import ViceChair from "../../assets/img/ex-eb/acting2023-24/Vice Chair Ahmed_Kiser.jpg";

const Ex_executive = () => {
    const ex_executivePanel = [
        {
            name: "Tahiat Hakim Himel",
            designation: "Chair",
            image: Secretary,
        },
        {
            name: "Ahmed Kiser",
            designation: "Vice Chair",
            image: ViceChair,
        },
    ];

    return (
        <MaxWidthWrapper>
            <div className="py-2 md:py-2 lg:py-2 relative text-center md:text-start">
                <h1 className="text-lg mb-20 md:text-2xl lg:text-3xl text-center">Acting Executive Panel 2024</h1>

                {/* Pictures */}
                <div className="flex justify-center mt-10">
                    {ex_executivePanel.map(({ name, designation, image }, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center mx-10">
                                <Image
                                    src={image}
                                    className="w-48 h-64 lg:w-64 lg:h-80 object-cover rounded-lg border-[#9747FF] hover:border-[#2F92D0] border-2"
                                    alt={name}
                                />
                                <h1 className="text-sm md:text-lg lg:text-xl text-center mt-2">
                                    {name}
                                </h1>
                                <p className="text-[10px] md:text-sm text-muted-foreground italic">
                                    {designation}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Ex_executive;
