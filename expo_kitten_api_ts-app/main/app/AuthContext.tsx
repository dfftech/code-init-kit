import React, { useState, useContext, useEffect, useCallback } from "react";
import AppStorage from "./AppStorage";
import { sessionUserEmit } from "./AppEvent";
import {useNavigation} from "@react-navigation/native";

export const AuthContext = React.createContext({
  sessionUser: AppStorage.getData("user"),
  setSessionUserCall: () => {},
});

export const AuthProvider = ({navigation, children }: any) => {
  const authContext = useContext(AuthContext);
  const [sessionUser, setSessionUser] = useState(authContext.sessionUser);

  // console.log("AuthProvider -> history: ", window.location.pathname);
  // if (window.location.pathname === "/") {
  //   navigation.navigate("SignIn");
  // }

  useEffect(() => {
    console.log("session user change:", sessionUser);
    sessionUserEmit(sessionUser);
  }, [sessionUser]);

  useEffect(() => {
    console.log("history change :::: ", navigation);
    if (sessionUser && new Date().getTime() > new Date(sessionUser.passwordExp).getTime()) {
      navigation.navigate(`ChangePassword`);
      return;
    }
    // if (sessionUser == null ) {
    //   console.log("AuthProvider -> redirect url: signin page");
    //   navigation.navigate("SignIn");
    // }
  }, [navigation]);

  const setUser = (userData: any) => {
    console.log("setUser: ", userData);
    setSessionUser(userData);
  };

  const provider = {
    sessionUser,
    setSessionUserCall: useCallback(setUser, []),
  };

  // @ts-ignore
  return <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>;
};
