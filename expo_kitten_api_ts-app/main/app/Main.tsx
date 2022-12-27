import React from "react";
import UseColorScheme from "../shared/UseColorScheme";

import AppRouter from "./AppRouter";
import Message from "../shared/Message";
import { AuthProvider } from "./AuthContext";
import * as eva from "@eva-design/eva";
import {ApplicationProvider, IconRegistry, Text} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as mapping } from "../../mapping.json";
import { default as theme } from "../../theme.json";
// import {
//   Provider as PaperProvider,
//   DefaultTheme as PaperDefaultTheme,
//   DarkTheme as PaperDarkTheme,
// } from "react-native-paper";
import { DarkTheme as NavigateDarkTheme, DefaultTheme as NavigateDefaultTheme } from "@react-navigation/native";
import ProgressBar from "../shared/ProgressBar";
const DefaultTheme = {
  ...NavigateDefaultTheme,
  colors: {
    ...NavigateDefaultTheme.colors,
  },
};

const DarkTheme = {
  ...NavigateDarkTheme,
  colors: {
    ...NavigateDarkTheme.colors,
  },
};

const Main = () => {
  const colorScheme = UseColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} >
        <ProgressBar />
        <AuthProvider>
          <AppRouter theme={theme} />
        </AuthProvider>
        <Message />
      </ApplicationProvider>
    </>
  );
};

export default Main;
