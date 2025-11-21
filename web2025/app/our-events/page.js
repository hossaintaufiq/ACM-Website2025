import Background from "./background";
import Gallery from "../../components/home-page-sections/Gallery";
import JoinNow from "../../components/home-page-sections/JoinNow";
import ACMEvents from "../../components/home-page-sections/ACMEvents";

export default function Event() {
  return (
    <>
      {/* Home Page */}
      <section className="">
        <Background />
        <ACMEvents />
        <div className="bg-[#215AD7]">
          <JoinNow />
        </div>
        <Gallery />
      </section>
    </>
  );
}
