
import React from "react";
import UseCachedResources from "./main/shared/UseCachedResources";
import Main from "./main/app/Main";
import "./main/app/FocusGlow";
import {SafeAreaProvider} from "react-native-safe-area-context";

const App = () => {
    const isLoadingComplete = UseCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Main />
            </SafeAreaProvider>
        );
    }
};

export default App;
