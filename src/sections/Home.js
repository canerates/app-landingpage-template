import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"
import * as Scroll from "react-scroll"
import MobileAppButton from "../components/shared/MobileAppButton";
import mainData from "../content/main.json"

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

const StyledHomeGrid = styled(Grid)(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
  padding: "1rem",
  marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledHomeGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  padding: "0rem",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    order: "1",
    paddingLeft: "1rem",
    marginTop: "2rem",
  },
}));

const StyledHomeImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  maxWidth: "95%",
  height: "auto",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },

}));

const StyledHomeGridText = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  animation: "fadeIn",
  animationDuration: "2s",
  paddingLeft: "0 !important",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    width: "100%",
    margin: "0",
    order: "2",
    textAlign: "center",
    padding: "2rem",
    paddingRight: "0 !important"
  },
}));

const StyledHomeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.text.secondary,
  fontSize: "clamp(28px, 4vw, 52px) !important",
  [theme.breakpoints.up("md")]: {
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center"
  },
}));

const StyledHomeSubTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.text.primary,
  fontSize: "clamp(20px, 2.5vw, 36px) !important",
  [theme.breakpoints.up("md")]: {
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center"
  },
}));

const StyledHomeSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary + " !important",
  fontSize: "clamp(16px, 1.5vw, 20px) !important",
  marginTop: "1rem",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    width: "70%",
  },
}));

const StyledHomeButton = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "2rem",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    marginTop: "1rem",
  },
}));

const Home = ({ img }) => {

  const [isMobile, setIsMobile] = useState(false);
  const iOSUrl = mainData.downloadLink
  // const googleUrl = "#"
  // const youtubeUrl = "#"

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <Scroll.Element name="Home">
      <StyledHomeRoot isMobile={isMobile}>
        <StyledHomeContainer>
          <StyledHomeGrid container>
            <StyledHomeGridItem
              item
              xs={12}
              md={8}
            >
              <StyledHomeImage alt="Image of PasswOCD" src={img} />
            </StyledHomeGridItem>

            <StyledHomeGridText
              item
              xs={12}
              md={3.5}
            >
              <StyledHomeTitle component="h1">
                Lorem ipsum
              </StyledHomeTitle>

              <StyledHomeSubTitle component="h1">
                dolor sit amet
              </StyledHomeSubTitle>

              <StyledHomeSubText component="h1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </StyledHomeSubText>
              <StyledHomeButton>
                <MobileAppButton iOSUrl={iOSUrl}/>
              </StyledHomeButton>


            </StyledHomeGridText>
          </StyledHomeGrid>
        </StyledHomeContainer>
      </StyledHomeRoot>
    </Scroll.Element>
  )
}

export default Home