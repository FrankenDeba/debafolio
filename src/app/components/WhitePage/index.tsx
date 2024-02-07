import React, { useEffect, useState } from "react";
import Profile from "../Profile";
import "./WhitePage.css";
import "../../../styles/tailwind.css";
// "../styles/tailwind.css";

function WhitePage() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleAnimScroll = () => {
    console.log("scrolling: ", window.scrollY);
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (window?.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    console.log({ scrollY });
  }, [scrollY]);
  useEffect(() => {
    window.addEventListener("scroll", handleAnimScroll);
    return () => {
      window.removeEventListener("scroll", handleAnimScroll);
    };
  }, []);
  return (
    <div className="wp__cover">
      <div className="sect-1">
        <div
          className="skew-bg1 bg:w-800 h-550 md:w-500 md:h-150 sm:w-300 sm:h-100"
          style={{
            position: "relative",
            left: `calc(${scrollY * (isMobile ? 0.1 : 0.2)}px - 20vw)`,
            top: `-${scrollY * (isMobile ? 0.1 : 0.5)}`,
            border: `${isMobile ? "2px solid blue" : ""}`,
            //   border: "2px solid red",
          }}
        ></div>
        <Profile />
        {/* <div></div> */}
        <div
          className="skew-bg2"
          style={{
            position: "relative",
            right: `calc(${scrollY * (isMobile ? 0.1 : 0.5)}px - 20vw)`,
            top: `-${scrollY * (isMobile ? 0.1 : 0.5)}`,
          }}
        ></div>
      </div>
      {/* <div className="menu__box bg-blue-500">hgghh</div> */}
    </div>
  );
}

export default WhitePage;
