import { DarkTheme as NavigateDarkTheme } from "@react-navigation/native";
import { extendTheme } from "native-base";

const DarkTheme = extendTheme({
  ...NavigateDarkTheme,
  //   colors: {
  //     ...NavigateDarkTheme.colors,
  //   },
  config: {
    initialColorMode: "dark",
  },
  dark: true,
  components: {
    Text: {
      baseStyle: {
        color: "coolGray.50",
      },
    },
    Box: {
      baseStyle: {
        backgroundColor: "coolGray.800",
      },
    },
  },
});

export default DarkTheme;
