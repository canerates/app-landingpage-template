import { React, useState, useEffect } from "react"
import { Container, Grid, styled, useTheme } from "@mui/material"
import Slider from "react-slick";
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import "animate.css"

import { StyledGenericRoot, StyledGenericContainer } from "../components/shared/Generic"
import PageHeader from "../components/shared/PageHeader"
import screens from "../content/screens.json"
import ScreenCard from "../components/screens/ScreenCard"

const StyledScreensContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  justifyContent: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
}));

const StyledScreensGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  width: "100%",
  marginLeft: "0 !important",
  marginTop: "0 !important",
  paddingBottom: "2rem",
  paddingTop: "1rem",
}));

const StyledScreensSwiperContainer = styled("div")(({ theme }) => ({
  width: "100%",
}));

const StyledScreensSlider = styled(Slider)(({ theme }) => ({

  ".slick-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "1rem",
  },

  ".slick-center > div img": {
    opacity: 1,
    transform: "scale(1)",
  },

  ".slick-dots li": {
    height: "5px",
    width: "16px",
  },

  ".slick-dots li button:before": {
    content: "'unset'",
    width: "16px",
    height: "5px",
    lineHeight: "5px",
    backgroundColor: theme.palette.screens.slickDotsBackgroundSecondary,
    borderRadius: "30px",
    color: "transparent",
    opacity: 1,
  },

  ".slick-dots li.slick-active": {
    width: "39px",
    height: "5px",
  },

  ".slick-dots li.slick-active button:before": {
    width: "39px",
    height: "5px",
    background: theme.palette.screens.slickDotsBackgroundPrimary,
    boxShadow: `0 0 4px 1px ${theme.palette.screens.slickDotsShadowPrimary}`,
  },

}));

const Screens = () => {

  const [screensContainer, screensContainerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: "30px",
    infinite: true,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
          padding: "0"
  
        }
      },
      {
        breakpoint: theme.breakpoints.values.smd,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "140px"
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "220px"
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px"
        }
      }
  
    ]
  };

  return (
    <Scroll.Element name="Screens">
      <StyledGenericRoot ref={screensContainer} isMobile={isMobile}>
        <StyledGenericContainer
          sx={
            screensContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            screensContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <PageHeader title="Screens" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        </StyledGenericContainer>

        <StyledScreensContainer>
          <InView threshold={0.2} triggerOnce={true}>
            {({ ref, inView }) => (
              <StyledScreensGrid
                ref={ref}
                inView={inView}
                sx={
                  inView
                    ? {
                      visibility: "visible",
                      animation: "fadeInUp",
                      animationDuration: "1s",
                    }
                    : { visibility: "hidden" }
                }
              >
                <StyledScreensSwiperContainer>

                    <StyledScreensSlider {...settings}>
                      {screens.map((screen) => (
                        <ScreenCard screen={screen} />
                      ))}
                    </StyledScreensSlider>

                </StyledScreensSwiperContainer>

              </StyledScreensGrid>
            )}
          </InView>
        </StyledScreensContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  )
}

export default Screens