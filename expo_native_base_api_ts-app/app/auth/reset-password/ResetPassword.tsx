import * as React from "react";
import { ScrollView, View, Dimensions } from "react-native";

import { useForm } from "react-hook-form";

import { unSecurePost } from "../../../utils/Http";
import AuthLayout from "../AuthLayout";
import { messageEmit } from "../../../utils/AppEvent";
import { useFocusEffect } from "@react-navigation/native";
import { AuthEntity } from "../AuthEntity";
import { useEffect, useState } from "react";

import { Heading } from "native-base";

const ResetPassword = (props: any) => {
  const [auth, setAuth] = useState(new AuthEntity());
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loadingIndicator, setLoadingIndicator] = React.useState(false);
  const { navigation } = props;
  const onFormSubmit = async (data: any) => {
    setLoadingIndicator(true);
    unSecurePost("/auth/resetPassword", data, true).subscribe((resData) => {
      setLoadingIndicator(false);
      if (resData != null) {
        messageEmit(resData);
        navigation.navigate("SignIn");
      }
    });
  };

  let dimensionWidth = Dimensions.get("window").width;

  const navigateSignIn = () => {
    navigation.navigate("SignIn");
  };

  useFocusEffect(
    React.useCallback(() => {
      setAuth((item: any) => ({ ...item, ...{ userid: props.route.params.userid } }));
    }, [])
  );

  useEffect(() => {
    reset(auth);
  }, [auth]);

  return (
    <AuthLayout name="Rest Password">
      <Heading>Rest Password</Heading>
    </AuthLayout>
  );
};

export default ResetPassword;
