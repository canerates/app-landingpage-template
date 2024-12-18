import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.5em",
          height: "0.5em",
          backgroundColor: "#ecf0f1",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#3A506B",
          borderRadius: "0.2em",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      primary: "#ecf0f1",
      secondary: "#bdc3c7",
    },
    button: {
      backgroundPrimary: "#53739A", // blue
      backgroundSecondary: "#018786", //green
      foregroundPrimary: "#fff",
      foregroundSecondary: "#fff",
    },
    text: {
      primary: "#0B132B",
      secondary: "#53739A"
    },
    switch: {
      baseBackground: `linear-gradient(to bottom, aqua, skyblue)`,
      notchBackground: "gold",
      notchIcon: "papayawhip"
    },
    feature: {
      backgroundPrimary: "#bdc3c7",
      backgroundSecondary: "#bdc3c7",
      shadowPrimary: "#2c3e50",
      shadowSecondary: "#018786",
    },
    screens: {
      slickDotsBackgroundPrimary: "#53739A",
      slickDotsBackgroundSecondary: "#bdc3c7", 
      slickDotsShadowPrimary: "#fff",

    },
    technology: {
      backgroundPrimary: "#bdc3c7",
      backgroundSecondary: "#bdc3c7",
      shadowPrimary: "#2c3e50",
      shadowSecondary: "#018786",
    },
    logo: {
      primary: "#53739A",
    },
    mobileButton: {
      backgroundPrimary: "#212121",
      backgroundSecondary: "#53739A",
      border: "#ecf0f1",
      text: "#ecf0f1",
    },
  }
});

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#212121",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#5BC0BE",
          borderRadius: "0.2em",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      primary: "#212121",
      secondary: "#3A506B",
    },
    button: {
      backgroundPrimary: "#03DAC6", //green
      backgroundSecondary: "#3700B3", //blue
      foregroundPrimary: "#000",
      foregroundSecondary: "#fff",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#6FFFE9"
    },
    feature: {
      backgroundPrimary: "#505050",
      backgroundSecondary: "",
      shadowPrimary: "#3A506B",
      shadowSecondary: "#03DAC6",
    },
    screens: {
      slickDotsBackgroundPrimary: "#03DAC6",
      slickDotsBackgroundSecondary: "#d6d6d6", 
      slickDotsShadowPrimary: "#3A506B",
    },
    technology: {
      backgroundPrimary: "#505050",
      backgroundSecondary: "",
      shadowPrimary: "#3A506B",
      shadowSecondary: "#03DAC6",
    },
    logo: {
      primary: "#03DAC6",
    },
    mobileButton: {
      backgroundPrimary: "#ecf0f1",
      backgroundSecondary: "#03DAC6",
      border: "#212121",
      text: "#212121",
    },
  },
});
