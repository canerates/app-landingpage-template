import React, { useContext } from "react"
import { Button, Typography, styled } from "@mui/material"
import { ThemeContext } from "../../utils/ThemeContext"
import appleDark from "../../assets/icons/apple-dark.svg"
import appleLight from "../../assets/icons/apple-light.svg"
import googlePlay from "../../assets/icons/google-play.svg"
import youtube from "../../assets/icons/youtube.svg"

const StyledMobileButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px",
  gap: "10px",
  cursor: "pointer",
  border: "2px solid",
  borderColor: theme.palette.mobileButton.border,
  borderRadius: "10px",
  backgroundColor: theme.palette.mobileButton.backgroundPrimary,
  transition: "transform 150ms ease-in-out 0s !important",
  "&:hover": {
    backgroundColor: theme.palette.mobileButton.backgroundSecondary + " !important",
    transform: "scale(1.05)",
  },
}));

const StyledButtonTextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  color: "#000"

}));

const StyledButtonTitle = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: theme.palette.mobileButton.text

}));

const StyledButtonStoreName = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  color: theme.palette.mobileButton.text,
  textTransform: "none",
}));

const StyledButtonStoreLogo = styled("img")(({ theme }) => ({
  width: "36px"

}));


const MobileAppButton = ({ iOSUrl, googleUrl, youtubeUrl }) => {

  const { theme } = useContext(ThemeContext);
  const appleLogo = theme === "light" ? appleLight : appleDark

  let logo, href, title, storeName

  if (iOSUrl) {
    logo = appleLogo
    href = iOSUrl
    title = "Download on the"
    storeName = "App Store"
  } else if (googleUrl) {
    logo = googlePlay
    href = googleUrl
    title = "Download on the"
    storeName = "Google Play"
  } else if (youtubeUrl) {
    logo = youtube
    href = youtubeUrl
    title = "Watch on the"
    storeName = "YouTube"
  }
  
  return (
    <StyledMobileButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledButtonStoreLogo src={logo} alt="store logo" />
      <StyledButtonTextContainer>
        <StyledButtonTitle>{title}</StyledButtonTitle>
        <StyledButtonStoreName>{storeName}</StyledButtonStoreName>
      </StyledButtonTextContainer>
    </StyledMobileButton>
  )
}

export default MobileAppButton