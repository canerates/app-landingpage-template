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
      shadowPrimary: "",
      shadowSecondary: ""
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
      button: "#03DAC6", //green
    },
    technology: {
      backgroundPrimary: "#bdc3c7",
      backgroundSecondary: "#bdc3c7",
      shadowPrimary: "#2c3e50",
      shadowSecondary: "#018786",
      button: "#03DAC6", //green
    },
    logo: {
      primary: "#840e0e"
    }
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
      shadowPrimary: "",
      shadowSecondary: ""
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
      button: "#03DAC6", //green
    },
    technology: {
      backgroundPrimary: "#505050",
      backgroundSecondary: "",
      shadowPrimary: "#3A506B",
      shadowSecondary: "#03DAC6",
      button: "#03DAC6", //green
    },
    logo: {
      primary: "#840e0e"
    }
  },
});
