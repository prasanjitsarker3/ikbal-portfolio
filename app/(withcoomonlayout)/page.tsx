import Footer from "../src/common/Footer";
import AboutSection from "../src/components/AboutSection";
import ClientsSection from "../src/components/ClientSection";
import MainBanner from "../src/components/MainBanner";
import SecondMainBanner from "../src/components/SecondMainBanner";
import VideoSection from "../src/components/VideoSection";

const HomePge = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* <MainBanner /> */}
      <SecondMainBanner/>
      <AboutSection/>
      <VideoSection/>
      <ClientsSection/>
      <Footer/>
    </div>
  );
};
export default HomePge;
