import Hero from "./hero";

import Gallery from "./Gallery";
import JoinNow from "../../components/home-page-sections/JoinNow";
// import JoinNow from "./JoinNow";

export default function Event() {
  return (
    <>
      {/* Home Page */}
      <section className="">
        <Hero />
        <div className="bg-[#215AD7]">
          <JoinNow />
        </div>
        <Gallery />
      </section>
    </>
  );
}
