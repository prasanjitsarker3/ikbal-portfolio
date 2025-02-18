import Footer from "@/app/src/common/Footer";
import PhotoSection from "@/app/src/components/PhotoSection";
import PhotoGallery from "@/app/src/PhotoView/PhotoGallery";
import PhotoViewBanner from "@/app/src/PhotoView/PhotoViewBanner";
import React from "react";

const PhotoViewPage = () => {
  return (
    <div className=" bg-[#0A0A0A]">
      <PhotoViewBanner />
      <PhotoGallery />
      <PhotoSection />
      <Footer />
    </div>
  );
};

export default PhotoViewPage;
