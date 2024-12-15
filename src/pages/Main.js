import React, { useState, useEffect } from "react"
import { Container, styled } from "@mui/material"
import Navbar from "../components/Navbar"
import Home from "../sections/Home"
import Features from "../sections/Features"
import Screens from "../sections/Screens"
import Technology from "../sections/Technology"
import Designs from "../sections/Designs"
import Footer from "../sections/Footer"

const StyledMainPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  overflow: "hidden",
}));
const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
});

const Main = () => {

  return (
    <>
      <Navbar />
      <StyledMainPage>
        <StyledMainContainer>
          <Home />
          <Features />
          <Screens />
          <Technology />
          <Designs />
        </StyledMainContainer>
      </StyledMainPage>
      <Footer />
    </>
  );
}

export default Main;