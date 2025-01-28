import Footer from "@/app/src/common/Footer";
import MainVideoSection from "@/app/src/components/MainVideoSection";

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className=" h-60  md:h-96">
        <h1 className=" w-full h-full text-3xl md:text-5xl xl:text-6xl text-white flex justify-center items-center text-center">
          Video Explore
        </h1>
      </div>
      <MainVideoSection />
      <Footer />
    </div>
  );
};
export default VideoPage;
