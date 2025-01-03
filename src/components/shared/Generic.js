import { styled, Container } from "@mui/material"

export const StyledGenericRoot = styled("section")(({ theme, isMobile }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  marginBottom: "1rem",
  // minHeight: "100vh",
  minHeight: isMobile ? "auto" : "100vh",
  backgroundColor: theme.palette.background.primary,

}));

export const StyledGenericContainer = styled(Container)({
  display: "flex !important",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",

});