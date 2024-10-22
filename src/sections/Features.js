import { React, useState, useEffect } from "react"
import { Container, Grid, styled } from "@mui/material"
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import "animate.css"

import { StyledGenericRoot, StyledGenericContainer } from '../components/Generic'
import PageHeader from '../components/PageHeader'

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
                    <PageHeader title="Features" subText="Measures. Scan. Design." />
                </StyledGenericContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    )
}

export default Features