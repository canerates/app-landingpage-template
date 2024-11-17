import { React, useState, useEffect } from "react"
import { Container, Grid, styled } from "@mui/material"
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import "animate.css"

import { StyledGenericRoot, StyledGenericContainer } from "../components/shared/Generic"
import PageHeader from "../components/shared/PageHeader"
import features from "../content/features.json"
import FeatureCard from "../components/features/FeatureCard"

const StyledFeaturesContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
}));

const StyledFeaturesGrid = styled(Grid)(({ theme }) => ({
    justifyContent: "space-around",
    width: "100%",
    marginLeft: "0 !important",
    marginTop: "0 !important",
    paddingBottom: "1rem",
    paddingTop: "1rem",
}));

const StyledFeaturesGridItem = styled(Grid)(({ theme }) => ({
    position: "relative",
    minHeight: "15rem",
    paddingTop: "0 !important",
    paddingLeft: "0 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const Features = () => {

    const [featuresContainer, featuresContainerInView] = useInView({
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
        <Scroll.Element name="Features">
            <StyledGenericRoot ref={featuresContainer} isMobile={isMobile}>
                <StyledGenericContainer
                    sx={
                        featuresContainerInView
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                    }
                    className={
                        featuresContainerInView ? "animate__animated animate__fadeInUp" : ""
                    }
                >
                    <PageHeader title="Features" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                </StyledGenericContainer>

                <StyledFeaturesContainer>
                    <StyledFeaturesGrid container rowSpacing={6} columnSpacing={12}>
                        {features.map((feature) => (
                            <InView key={feature.id} threshold={0.9} triggerOnce={true}>
                                {({ ref, inView }) => (
                                    <StyledFeaturesGridItem
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
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
                                        <FeatureCard feature={feature} />

                                    </StyledFeaturesGridItem>
                                )}

                            </InView>
                        ))}

                    </StyledFeaturesGrid>
                </StyledFeaturesContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    )
}

export default Features