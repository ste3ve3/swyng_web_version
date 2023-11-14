import React, { useState, useEffect } from "react";
import { IconSquareRoundedArrowUpFilled } from "@tabler/icons-react"; 

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-7 right-7 z-[999999] cursor-pointer"
          onClick={scrollToTop}
        >
         < IconSquareRoundedArrowUpFilled className="h-10 w-10 text-red-300 hover:text-gray-900 transition-colors duration-300"/>
        </div>
      )}
    </>
  );
};