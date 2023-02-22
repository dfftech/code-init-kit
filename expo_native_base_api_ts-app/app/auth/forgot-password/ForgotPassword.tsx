import * as React from "react";

import { useForm } from "react-hook-form";
import TypeInput from "../../../types/TypeInput";
import { ScrollView, View, Dimensions } from "react-native";
import { unSecurePost } from "../../../utils/Http";
import AuthLayout from "../AuthLayout";
import { messageEmit } from "../../../utils/AppEvent";

import { Loading, PageTitle } from "../../../shared/PageUtil";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { useEffect, useState } from "react";
import { AuthEntity } from "../AuthEntity";
import { useFocusEffect } from "@react-navigation/native";
import { Heading } from "native-base";

const ForgotPassword = (props: any) => {
  const [auth, setAuth] = useState(new AuthEntity());
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { navigation } = props;
  const [loadingIndicator, setLoadingIndicator] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setAuth(new AuthEntity());
    }, [])
  );

  useEffect(() => {
    reset(auth);
  }, [auth]);

  const onFormSubmit = async (data: any) => {
    setLoadingIndicator(true);
    unSecurePost("/auth/forgotPassword", data, true).subscribe((resData) => {
      setLoadingIndicator(false);
      if (resData != null) {
        messageEmit(resData);
        navigation.navigate("ResetPassword", { userid: data.userid });
      }
    });
  };

  let dimensionWidth = Dimensions.get("window").width;
  const navigateSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <AuthLayout name={"Forgot Password"}>
      <View style={{ width: dimensionWidth > 400 ? 350 : dimensionWidth }}>
        <Heading> Forgot Password</Heading>
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
