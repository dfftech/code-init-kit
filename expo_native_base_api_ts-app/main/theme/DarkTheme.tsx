import { DarkTheme as NavigateDarkTheme } from "@react-navigation/native";
import { extendTheme } from "native-base";

const DarkTheme = extendTheme({
  ...NavigateDarkTheme,
  colors: {
    ...NavigateDarkTheme.colors,
    amber: {
      400: "#d97706",
    },
  },
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
  },
});

export default DarkTheme;
