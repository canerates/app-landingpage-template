import { React, useState, useEffect } from "react"
import { Container, Grid, styled } from "@mui/material"
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import "animate.css"

import { StyledGenericRoot, StyledGenericContainer } from "../components/shared/Generic"
import PageHeader from "../components/shared/PageHeader"
import technologies from "../content/technology.json"
import TechnologyCard from "../components/technology/TechnologyCard"

const StyledTechnologyContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
}));

const StyledTechnologyGrid = styled(Grid)(({ theme }) => ({
    justifyContent: "space-around",
    width: "100%",
    marginLeft: "0 !important",
    marginTop: "0 !important",
    paddingBottom: "1rem",
    paddingTop: "1rem",
}));

const StyledTechnologyGridItem = styled(Grid)(({ theme }) => ({
    position: "relative",
    minHeight: "15rem",
    paddingTop: "0 !important",
    paddingLeft: "0 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const Technology = () => {

    const [technologyContainer, technologyContainerInView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileDevice =
            /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    return (
        <Scroll.Element name="Technology">
            <StyledGenericRoot ref={technologyContainer} isMobile={isMobile}>
                <StyledGenericContainer
                    sx={
                        technologyContainerInView
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                    }
                    className={
                        technologyContainerInView ? "animate__animated animate__fadeInUp" : ""
                    }
                >
                    <PageHeader title="Technology" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                </StyledGenericContainer>

                <StyledTechnologyContainer>
                    <StyledTechnologyGrid container rowSpacing={6} columnSpacing={12}>
                        {technologies.map((technology) => (
                            <InView key={technology.id} threshold={0.9} triggerOnce={true}>
                                {({ ref, inView }) => (
                                    <StyledTechnologyGridItem
                                        item
                                        xs={12}
                                        sm={12}
                                        md={6}
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
                                        <TechnologyCard technology={technology} />

                                    </StyledTechnologyGridItem>
                                )}

                            </InView>
                        ))}

                    </StyledTechnologyGrid>
                </StyledTechnologyContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    )
}

export default Technology