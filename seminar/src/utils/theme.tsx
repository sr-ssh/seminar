import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    gohan: { light: string };
    goku: { light: string };
    beerus: { light: string };
    hit: { light: string };
    hover: { light: string };
    piccolo: { light: string };
    ghost: { light: string };
    popo: { light: string };
    backdrop: { light: string };
    trunks: { light: string };
    bulma: { light: string };
  }
  interface PaletteOptions {
    gohan?: { light: string };
    goku?: { light: string };
    beerus?: { light: string };
    hit?: { light: string };
    hover?: { light: string };
    piccolo?: { light: string };
    ghost?: { light: string };
    popo?: { light: string };
    backdrop?: { light: string };
    trunks?: { light: string };
    bulma?: { light: string };
  }

  interface TypographyVariants {
    _3xl: React.CSSProperties;
    xl: React.CSSProperties;
    lg: React.CSSProperties;
    md: React.CSSProperties;
    _md: React.CSSProperties;
    sm: React.CSSProperties;
    xs: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    _3xl?: React.CSSProperties;
    xl?: React.CSSProperties;
    lg?: React.CSSProperties;
    md?: React.CSSProperties;
    _md?: React.CSSProperties;
    sm?: React.CSSProperties;
    xs?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    _3xl: true;
    xl: true;
    lg: true;
    _md: true;
    md: true;
    sm: true;
    xs: true;
  }
}

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Estedad-VF",
    xl: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    _3xl: {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "140%" /* 44.8px */,
    },
    lg: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "140%" /* 44.8px */,
    },
    md: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "140%" /* 44.8px */,
    },
    _md: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "140%" /* 44.8px */,
    },
    sm: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "140%" /* 44.8px */,
    },
    xs: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "140%" /* 44.8px */,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: '0';
          box-sizing: border-box;
          // ... your base styles or resets
        }
        * {
        box-sizing: border-box;
        }
      `,
    },
  },

  palette: {
    primary: { main: "#4E46B4" },
    gohan: { light: "#FFFFFF" },
    goku: { light: "#F5F5F5" },
    beerus: { light: "#EBEBEB" },
    hit: { light: "#40A69F" },
    hover: { light: "#00000014" },
    piccolo: { light: "#4E46B4" },
    ghost: { light: "#4E46B41F" },
    popo: { light: "#000000" },
    backdrop: { light: "#0000008F" },
    trunks: { light: "#999CA0" },
    bulma: { light: "#000000" },
  },
});
