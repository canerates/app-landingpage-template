import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"
import * as Scroll from "react-scroll"

const StyledHomeRoot = styled("section")(({ theme, isMobile }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minHeight: isMobile ? "auto" : "100vh",
  marginBottom: "1rem",
}));

const StyledHomeContainer = styled(Container)(({ theme, ismobile }) => ({
  display: "flex !important",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  width: "unset",
  marginTop: "2rem",
}));

const Home = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <Scroll.Element name="Home">
      <StyledHomeRoot isMobile={isMobile}>
        <p>Home</p>
      </StyledHomeRoot>
    </Scroll.Element>
  )
}

export default Home