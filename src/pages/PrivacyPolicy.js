import React from "react"
import { Container, styled } from "@mui/material"
import Navbar from "../components/Navbar"
import Privacy from "../sections/Privacy"

const StyledPrivacyPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  overflow: "hidden",
}));
const StyledPrivacyContainer = styled(Container)({
  maxWidth: "1600px",
});

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <StyledPrivacyPage>
        <StyledPrivacyContainer>
          <Privacy />
        </StyledPrivacyContainer>
      </StyledPrivacyPage>

    </>
  )
}

export default PrivacyPolicy