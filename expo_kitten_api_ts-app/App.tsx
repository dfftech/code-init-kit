
import React from "react";
import UseCachedResources from "./main/shared/UseCachedResources";
import Main from "./main/app/Main";
import "./main/app/FocusGlow";

const App = () => {
    const isLoadingComplete = UseCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <>
                <Main />
            </>
        );
    }
};

export default App;
