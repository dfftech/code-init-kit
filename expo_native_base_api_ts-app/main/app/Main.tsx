import React from "react";
import UseColorScheme from "../shared/UseColorScheme";

import AppRouter from "./AppRouter";
import Message from "../shared/Message";
import { AuthProvider } from "./AuthContext";

import { DarkTheme as NavigateDarkTheme, DefaultTheme as NavigateDefaultTheme } from "@react-navigation/native";
import ProgressBar from "../shared/ProgressBar";
import { extendTheme, NativeBaseProvider } from "native-base";
const DefaultTheme = extendTheme({
  ...NavigateDefaultTheme,
  colors: {
    ...NavigateDefaultTheme.colors,
  },
  config: {
    initialColorMode: "light",
  },
});

const DarkTheme = extendTheme({
  ...NavigateDarkTheme,
  colors: {
    ...NavigateDarkTheme.colors,
  },
  config: {
    initialColorMode: "dark",
  },
});

const Main = () => {
  const colorScheme = UseColorScheme();
  const theme = colorScheme === "dark" ? { ...DarkTheme } : { ...DefaultTheme };
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <ProgressBar />
        <AuthProvider>
          <AppRouter theme={theme} />
        </AuthProvider>
        <Message />
      </NativeBaseProvider>
    </>
  );
};

export default Main;
