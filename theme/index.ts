import {
  createTheme,
  typographyTheme
} from "anolis-ui";

export const theme = createTheme({
  ...typographyTheme({
    baseStyle: {
      _h1: {
        fontSize: { _: "2.125rem", sm: "6rem" },
        fontFamily: "Inter",
        lineHeight: { _: "2.375rem", sm: "6rem" },
        fontWeight: 300,
        color: "white",
        textAlign: "center"
      },
      _h2: {
        fontSize: { _: "2.125rem", sm: "3rem" },
        lineHeight: { _: "2.375rem", sm: "3rem" },
        fontFamily: "Inter",
        fontWeight: 300,
        color: "white",
        textAlign: "center"
      },
      _h4: {
        color: "primary",
        fontWeight: 400,
        fontFamily: "Inter"
      },
      _p: {
        fontSize: { _: "1rem" },
        textAlign: "center",
        color: "copy",
        fontFamily: "Inter"
      }
    }
  }),
});
