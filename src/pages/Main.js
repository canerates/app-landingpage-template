import React, { useState, useEffect } from "react"
import { Container, styled } from "@mui/material"
import Navbar from "../components/Navbar"
import Home from "../sections/Home"
import Features from "../sections/Features"
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
                </StyledMainContainer>
            </StyledMainPage>
            <Footer />
        </>
    );
}

export default Main;