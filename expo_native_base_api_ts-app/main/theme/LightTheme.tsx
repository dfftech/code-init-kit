import { DefaultTheme as NavigateLightTheme } from "@react-navigation/native";
import { extendTheme } from "native-base";

const LightTheme = extendTheme({
  ...NavigateLightTheme,
  colors: {
    ...NavigateLightTheme.colors,
    amber: {
      400: "#d97706",
    },
  },
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
    // Box: {
    //   baseStyle: {
    //     backgroundColor: "coolGray.50",
    //     color: "warmGray.100",
    //     shadow: 1,
    //   },
    // },
  },
});

export default LightTheme;
