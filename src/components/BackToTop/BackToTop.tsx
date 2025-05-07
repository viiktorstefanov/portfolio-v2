import React, { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

const isMobile = window.innerWidth <= 768;

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Zoom in={visible} style={{ opacity: isMobile ? 0.5 : 1 }}>
      <Fab
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          zIndex: 1000,
          backgroundColor: "#fda72d",
          color: "#000",
          "&:hover": {
            backgroundColor: "#000",
            color: "#fda72d",
          },
        }}
        size="small"
      >
        <IoIosArrowUp size={22} />
      </Fab>
    </Zoom>
  );
};

export default BackToTop;
