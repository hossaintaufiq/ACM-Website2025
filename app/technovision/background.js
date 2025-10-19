import Image from "next/image";
import CustomButton from "../../components/button-tab-sections/CustomButton";
import TopButton from "../../components/button-tab-sections/TopButton";

const Background = () => {
  return (
    <div className="">
    <Image src="/Rectangle 34.png" width ='1444' height= '520' alt=""></Image>
    <h1 className=""></h1>
    <section className="ml-[300px] mr-[259px]">
    <div className="w-515 h-114 flex-shrink-0 text-center text-white font-quantico font-bold text-8xl mt-[35px]  ">Technovation</div>
    <div className="w-885 h-170 flex-shrink-0 text-write font-Quantico text-base font-normal text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</div>
    </section>
    <div className="flex flex-row mt-[100px] m-[50px] p-[50px]">
      <div className="basis-1/2">
        <h1 className="text-6xl">Technovation</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
        </div>
      <div className="basis-1/2"><Image src="/Rectangle 34.png" className="h-[403px]" width ='540' height= '403' alt=""></Image></div>   
    </div>
    <div className="flex flex-row mt-[100px] m-[50px] p-[50px]">
    <div className="basis-1/2"><Image src="/Rectangle 34.png" className="h-[403px]" width ='540' height= '403' alt=""></Image></div>
      <div className="basis-1/2">
        <h1 className="text-6xl">Technovation</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
        </div>
         
    </div>
    </div>
    
  

  );
};

export default Background;
