import BestSeller from "../Components/BestSeller";
// import CookieItem from "../Components/CookieItem";

// import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import Contact from "../Components/Contact";
// import CookieItem from "../Components/CookieItem";

export default function Home() {
  return (
    <>
      <Slider />
      <BestSeller/>
      {/* <CookieItem /> */}
      <Contact />
    </>
  );
}
