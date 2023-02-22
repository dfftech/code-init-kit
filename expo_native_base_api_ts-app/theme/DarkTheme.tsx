import { DarkTheme as NavigateDarkTheme , DefaultTheme as NavigateLightTheme} from "@react-navigation/native";
import { extendTheme } from "native-base";


const DarkTheme = extendTheme({
  ...NavigateDarkTheme,
  colors: {
    ...NavigateDarkTheme.colors,
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  // config: {
  //   initialColorMode: 'dark',
  // },
  dark: true,
  components: {
    // Override components styles to match your dark theme here
    Text: {
      baseStyle: {
        color: 'white',
      },
    },
    Input:{
      baseStyle: {
        color: 'white',
      },
    },
    Heading: {
      baseStyle: {
        color: 'white',
      },
    },
    Center: {
      baseStyle: {
        backgroundColor: "coolGray.700",
      },
    },
    Button: {

      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 'md',
        color: 'white',
      },
      defaultProps: {
        colorScheme: 'emerald',
      },
    },
  },
  fonts: {
    // Customize your dark theme fonts here
  },
});

export default DarkTheme;
