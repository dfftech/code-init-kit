import React from "react";
import UseColorScheme from "../shared/UseColorScheme";

import AppRouter from "./AppRouter";
import Message from "../shared/Message";
import { AuthProvider } from "../utils/AuthContext";

import ProgressBar from "../shared/ProgressBar";
import { NativeBaseProvider } from "native-base";
import DarkTheme from "../theme/DarkTheme";
import LightTheme from "../theme/LightTheme";



const AppMain = () => {
  const colorScheme = UseColorScheme();
  console.log("colorScheme ------> ", colorScheme);
  const theme = colorScheme === "dark" ? { ...DarkTheme } : { ...LightTheme };
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

export default AppMain;
