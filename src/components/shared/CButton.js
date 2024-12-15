import React from "react"
import { Button, Typography, styled } from "@mui/material"

export const StyledGenericButton = styled(Button)(({ theme, isDrawer, fontSize }) => ({
  textTransform: "none",
  backgroundColor: theme.palette.button.backgroundPrimary + " !important",
  color: theme.palette.button.foregroundPrimary,
  transition: isDrawer ? "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms ease-in-out 0s !important" : "transform 150ms ease-in-out 0s !important",
  padding: "6px 12px",

  "& p": {
    fontSize: `${fontSize}rem !important`,
    padding: isDrawer ? "3px 7px" : "0px",
    animation: "fadeIn",
    animationDuration: "2s",
  },
  "&:hover": {
    backgroundColor: theme.palette.button.backgroundPrimary + " !important",
    transform: "scale(1.05)",
  },
  "&:active": {
    backgroundColor: theme.palette.button.backgroundPrimary + " !important",
  },
  "&:focus": {
    backgroundColor: theme.palette.button.backgroundPrimary + " !important",
  },

}));

const CButton = ({ title = "Button", href, fontSize = 1.2, isDrawer = false }) => {
  return (
    <StyledGenericButton
      variant="contained"
      href={href}
      target="_blank"
      isDrawer={isDrawer}
      fontSize={fontSize}
    >
      <Typography>
        {title}
      </Typography>
    </StyledGenericButton>
  )
}

export default CButton