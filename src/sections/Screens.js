import { React, useState, useEffect } from "react"
import { Container, Grid, styled } from "@mui/material"
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import "animate.css"

import { StyledGenericRoot, StyledGenericContainer } from "../components/shared/Generic"
import PageHeader from "../components/shared/PageHeader"

const Screens = () => {

    const [screensContainer, screensContainerInView] = useInView({
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
            </StyledGenericRoot>
        </Scroll.Element>
    )
}

export default Screens