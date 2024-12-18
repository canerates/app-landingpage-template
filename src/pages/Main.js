import React, { useState, useEffect } from "react"
import { Container, styled } from "@mui/material"
import Navbar from "../components/Navbar"
import Home from "../sections/Home"
import Features from "../sections/Features"
import Screens from "../sections/Screens"
import Technology from "../sections/Technology"
import Designs from "../sections/Designs"
import Footer from "../sections/Footer"
import Loader from "../sections/Loader"
import homeImage from "../assets/1650x1200.webp"

const StyledMainPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  overflow: "hidden",
}));
const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
});

const Main = () => {

  const [isLoading, setIsloading] = useState(true);
  const [homeImg, setHomeImg] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2900);

    const loadImage = async () => {
      const img = new Image();
      img.src = homeImage;
      await img.decode();
      setHomeImg(homeImage);
    };
    loadImage();
  }, []);

  return (

    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar isMain={true}/>
          <StyledMainPage>
            <StyledMainContainer>
              <Home img={homeImg}/>
              <Features />
              <Screens />
              <Technology />
              <Designs />
            </StyledMainContainer>
          </StyledMainPage>
          <Footer />
        </>
      )}
    </>
  );
}

export default Main;