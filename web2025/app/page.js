import About from "../components/home-page-sections/About";
import Hero from "../components/home-page-sections/Hero";
import ACMEvents from "../components/home-page-sections/ACMEvents";
import Activities from "../components/home-page-sections/Activities";
import Executive from "../components/home-page-sections/Executive";
import JoinNow from "../components/home-page-sections/JoinNow";
import Gallery from "../components/home-page-sections/Gallery";
import Vectors from "../components/home-page-sections/Vectors";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <Hero />
      <About />
      <ACMEvents />
      <Activities />
      <Executive />
      <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20">
        <JoinNow />
      </div>
      <Gallery />
    </>
  );
}
