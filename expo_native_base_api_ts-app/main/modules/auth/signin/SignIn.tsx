import React, { Fragment, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useForm } from "react-hook-form";
import { unSecurePost } from "../../../app/Http";
import AppStorage from "../../../app/AppStorage";

import AuthLayout from "../AuthLayout";
import { Loading, PageTitle } from "../../../shared/PageUtil";
import SignInForm from "./SignInForm";
import { useFocusEffect, useNavigation, useNavigationContainerRef } from "@react-navigation/native";
import { AuthEntity } from "../AuthEntity";
import { View } from "native-base";

const SignIn = (props: any) => {
  const [auth, setAuth] = useState(new AuthEntity());
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();
  const navigation = useNavigation();
  const [loadingIndicator, setLoadingIndicator] = React.useState(false);

  const onFormSubmit = (data: any) => {
    data.provider = "email";
    // setLoadingIndicator(true);
    navigation.navigate("AppHome" as never);
    unSecurePost("/auth/signin", data, true).subscribe(async (resData) => {
      console.log("Resp Data: ", resData);
      setLoadingIndicator(false);
      if (resData != null) {
        if (auth.rememberMe === true) {
          AppStorage.setData("RememberMe", data);
        } else {
          AppStorage.removeData("RememberMe");
        }
        navigation.navigate("AppHome" as never);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      onInit().finally();
      clearErrors();
    }, [])
  );
  useEffect(() => {
    reset(auth);
  }, [auth]);
  const onInit = async () => {
    await AppStorage.clearData();
    let rememberMeDetails = AppStorage.getData("RememberMe");
    if (rememberMeDetails) {
      rememberMeDetails.rememberMe = true;
      setAuth((item) => ({ ...item, ...rememberMeDetails }));
    }
  };

  let dimensionWidth = Dimensions.get("window").width;

  return (
    <Fragment>
      <AuthLayout name={"Login"}>
        <View> Login page</View>
      </AuthLayout>
    </Fragment>
  );
};

export default SignIn;
