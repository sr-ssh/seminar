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
}

export const theme = createTheme({
  direction: "rtl",
  palette: {
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
