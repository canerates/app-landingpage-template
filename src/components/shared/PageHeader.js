import { styled, Typography, Box, Link } from "@mui/material"
import PageLogo from "./PageLogo"

const isFirefox = /Firefox/i.test(navigator.userAgent);

export const StyledPageHeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "1rem",
  animation: "fadeInUp",
  animationDuration: "1s",
}));

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "clamp(32px, 4vw, 56px) !important",
  fontWeight: "bold !important",
  marginBottom: "1rem",
  position: "relative",
  textAlign: isFirefox ? "-moz-center" : "-webkit-center",
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    top: "50%",
    borderTop: "0.25rem solid",
    borderColor: theme.palette.text.primary,
    borderRadius: "2rem",
    width: "5rem",
  },
  "&:before": {
    right: '100%',
    marginRight: "1rem",
    transform: "translateY(-50%)",
  },
  "&:after": {
    left: "100%",
    marginLeft: "1rem",
    transform: "translateY(-50%)",
  },

}));

export const StyledPageSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: "center",
  fontSize: "clamp(18px, 1.75vw, 24px) !important",
  marginBottom: "0.5rem",
  width: "50vw !important",
  [theme.breakpoints.down("md")]: {
    width: "70vw !important",
  }
}));

export const StyledPageLogo = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  flexGrow: 1,
  "& svg": {
    fill: theme.palette.text.primary,
  },
}));



const PageHeader = ({ title, subText }) => {
  return (
    <StyledPageHeaderContainer>
      <PageLogo isSVG={true} />
      <StyledPageTitle component="h1">
        {title}
      </StyledPageTitle>
      <StyledPageSubText component="h1">
        {subText}
      </StyledPageSubText>

    </StyledPageHeaderContainer>
  )
}

export default PageHeader