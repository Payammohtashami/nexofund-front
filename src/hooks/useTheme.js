import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { faIR } from "@mui/material/locale";

const theme = 
  createTheme({
    palette: {
      mode: "light",
      primary: {
        light: "#4B88FF",
        main: "#2817ED",
        dark: "#2817ED",
      },

      secondary: {
        light: "#B53FEC",
        main: '#B53FEC',
        dark: "#B53FEC",
      },

      paper: {
        main: "#2a2e34",
        dark: "#2a2e34",
        light: "#F1F0F5",
      },
      
      solid: {
        dark1: '#DFDEEF',
        dark2: '#A5A2B5',
        dark3: '#494857',
        dark4: '#403F53',
        dark5: '#EAE9FF14',
        dark6: '#08071A',
        dark7: '#08071A66',

      },
      green: {
        default: "#36FF9E",
        dark: "#36FF9E",
        light: "#36FF9E",
      },
      red: {
        default: "#FD5977",
        dark: "#FD5977",
        light: "#FD5977",
      },
    },
  });

export default theme;
