import { DefaultTheme as NavigateLightTheme } from "@react-navigation/native";
import { extendTheme } from "native-base";

const LightTheme = extendTheme({
  ...NavigateLightTheme,
  //   colors: {
  //     ...NavigateLightTheme.colors,
  //   },
  config: {
    initialColorMode: "light",
  },
  dark: false,
  components: {
    Text: {
      baseStyle: {
        color: "coolGray.800",
      },
    },
    Box: {
      baseStyle: {
        backgroundColor: "coolGray.50",
      },
    },
  },
});

export default LightTheme;
