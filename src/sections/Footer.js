import { Typography, Box, Button, styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import "animate.css";
import { useInView } from "react-intersection-observer";
import PageLogo from "../components/shared/PageLogo";
import mainData from "../content/main.json"

const StyledFooterRoot = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: `${theme.palette.background.primary}99`,
  padding: "0.5rem",
}));

const StyledFooterContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1000px",
  width: "70%",
  margin: "0 auto",
}));

const StyledLogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
}));

const StyledLogo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  textDecoration: "none",

  "& p": {
    animation: "fadeIn",
    animationDuration: "2s",
    color: theme.palette.text.primary + " !important",
    fontFamily: "'Playwrite GB S', cursive",
    fontSize: "1.2rem",
    padding: "0",

  },
}));

const StyledLinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end"
}));


const StyledFooterLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  "& p": {
    color: theme.palette.text.primary + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0.5rem",
    "&:hover": {
      color: theme.palette.text.secondary + " !important",
      transform: "translateY(-2px)",
    },
  }

}));

const StyledFooterButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  textTransform: "none",
  fontSize: "1rem",
  cursor: "pointer",
  color: theme.palette.text.primary,
  "&:hover": {
      color: theme.palette.text.secondary + " !important",
    },
}));

const Footer = () => {

  const [footer, footerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <StyledFooterRoot ref={footer}>
      <div
        style={
          footerInView ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className={footerInView ? "animate__animated animate__fadeInUp" : ""}
      >
        <StyledFooterContainer>
          <StyledLogoContainer>
            <StyledLogo>
              <PageLogo width={56} height={56} isSVG={true} />
              <Typography>{mainData.appName}</Typography>
            </StyledLogo>
          </StyledLogoContainer>
          <StyledLinksContainer>
            <StyledFooterLink
              href={mainData.contactLink}
              smooth={true}
              duration={1000}
            >
              <p>Contact</p>
            </StyledFooterLink>

            <StyledFooterLink
              to="/privacy"
              smooth={true}
              duration={1000}
            >
              <p>Privacy</p>
            </StyledFooterLink>

          </StyledLinksContainer>

        </StyledFooterContainer>

        <StyledFooterButton
          href={mainData.developerLink}
          target="_blank"
          // rel="noopener noreferrer"
        >
          {mainData.copyright}
          </StyledFooterButton>

      </div>
    </StyledFooterRoot>

  )
}

export default Footer