import { createTheme } from "@mui/material/styles";

const BLACK      = "#1A1A1A";
const BLACK_MID  = "#2E2E2E";
const GRAY_DARK  = "#555555";
const GRAY       = "#888888";
const GRAY_LIGHT = "#C8C4BE";
const CREAM      = "#FAF9F7";
const CREAM_MID  = "#F2F0EC";
const WHITE      = "#FFFFFF";
const DIVIDER    = "#E8E5E0";

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: BLACK,
      light: BLACK_MID,
      dark: "#000000",
      contrastText: CREAM,
    },
    secondary: {
      main: GRAY_DARK,
      contrastText: WHITE,
    },
    background: {
      default: CREAM,
      paper: WHITE,
    },
    text: {
      primary: BLACK,
      secondary: GRAY_DARK,
    },
    divider: DIVIDER,
    custom: {
      black: BLACK,
      blackMid: BLACK_MID,
      grayDark: GRAY_DARK,
      gray: GRAY,
      grayLight: GRAY_LIGHT,
      cream: CREAM,
      creamMid: CREAM_MID,
      white: WHITE,
      divider: DIVIDER,
    },
  },
  typography: {
    fontFamily: '"Cairo", "Tajawal", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "2.2rem",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      "@media (max-width:900px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.8rem",
      lineHeight: 1.4,
      "@media (max-width:900px)": {
        fontSize: "1.4rem",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.4rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.2rem",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      fontSize: "0.9rem",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "10px 28px",
          fontWeight: 600,
          fontSize: "0.9rem",
          transition: "all 0.25s ease",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        containedPrimary: {
          backgroundColor: BLACK,
          color: CREAM,
          "&:hover": {
            backgroundColor: BLACK_MID,
            transform: "translateY(-1px)",
          },
        },
        outlinedPrimary: {
          borderColor: BLACK,
          color: BLACK,
          "&:hover": {
            backgroundColor: `${BLACK}08`,
            borderColor: BLACK,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: WHITE,
          border: `1px solid ${DIVIDER}`,
          borderRadius: 4,
          boxShadow: "none",
          transition: "all 0.3s ease",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: DIVIDER,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: WHITE,
          color: BLACK,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 1200px)": {
            maxWidth: 1200,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
