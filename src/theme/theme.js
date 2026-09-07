import { createTheme } from "@mui/material/styles";

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#D4B85A";
const GOLD_DARK = "#B8963E";
const BLACK = "#0A0A0A";
const BLACK_LIGHT = "#111111";
const CHARCOAL = "#1A1A1A";
const CHARCOAL_LIGHT = "#222222";
const WHITE = "#F5F5F0";
const GRAY = "#999999";
const GRAY_LIGHT = "#AAAAAA";
const DIVIDER = "#2A2A2A";

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: GOLD,
      light: GOLD_LIGHT,
      dark: GOLD_DARK,
      contrastText: BLACK,
    },
    secondary: {
      main: WHITE,
      contrastText: BLACK,
    },
    background: {
      default: BLACK,
      paper: CHARCOAL,
    },
    text: {
      primary: WHITE,
      secondary: GRAY,
    },
    divider: DIVIDER,
    gold: {
      main: GOLD,
      light: GOLD_LIGHT,
      dark: GOLD_DARK,
    },
    custom: {
      black: BLACK,
      blackLight: BLACK_LIGHT,
      charcoal: CHARCOAL,
      charcoalLight: CHARCOAL_LIGHT,
      white: WHITE,
      gray: GRAY,
      grayLight: GRAY_LIGHT,
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
      fontSize: "0.95rem",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "10px 28px",
          fontWeight: 600,
          fontSize: "0.95rem",
          transition: "all 0.3s ease",
        },
        containedPrimary: {
          backgroundColor: GOLD,
          color: BLACK,
          "&:hover": {
            backgroundColor: GOLD_LIGHT,
            transform: "translateY(-1px)",
            boxShadow: `0 4px 20px ${GOLD}40`,
          },
        },
        outlinedPrimary: {
          borderColor: GOLD,
          color: GOLD,
          "&:hover": {
            borderColor: GOLD_LIGHT,
            backgroundColor: `${GOLD}10`,
          },
        },
        outlinedSecondary: {
          borderColor: WHITE,
          color: WHITE,
          "&:hover": {
            borderColor: GOLD,
            color: GOLD,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: CHARCOAL,
          border: `1px solid ${DIVIDER}`,
          borderRadius: 12,
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
          backgroundColor: BLACK_LIGHT,
          color: WHITE,
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
  },
});

export default theme;
