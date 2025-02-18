"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 px-2 md:px-8 py-4 ${
          scrolling ? " bg-gray-800" : ""
        }`}
      >
        <div className=" container px-4  mx-auto  flex justify-between items-center">
          <Link
            href="/"
            className="text-white text-sm md:text-xl font-semibold hover:text-[#FF4D00]"
          >
            ALEX SMITH
          </Link>
          <div className=" space-x-2 md:space-x-6">
            <Link href="/videos" className="text-white hover:text-[#FF4D00]">
              Videos
            </Link>
            <Link href="/about" className="text-white hover:text-[#FF4D00]">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FF4D00]">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
