import { defaultTheme } from "@xstyled/system";
import { anolisXstyledTheme, pipeThemes } from "anolis-ui";

export const customXstyledTheme = pipeThemes(defaultTheme, anolisXstyledTheme, {
  colors: {
    primary: "#00D8FF",
    secondary: "#01FF97",
    copy: "#7986AF",
    hero: "#141B31",
    dark: "#080C18",
    darker: '#111624',
  }
});
