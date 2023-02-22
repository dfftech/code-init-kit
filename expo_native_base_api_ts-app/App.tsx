import React from "react";
import UseCachedResources from "./shared/UseCachedResources";
import AppMain from "./app/AppMain";
import "./utils/FocusGlow";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const isLoadingComplete = UseCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppMain />
      </SafeAreaProvider>
    );
  }
};

export default App;
