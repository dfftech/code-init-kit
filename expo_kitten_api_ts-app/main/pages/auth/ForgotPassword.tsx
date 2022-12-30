import * as React from "react";

import { useForm } from "react-hook-form";
import TypeInput from "../../types/TypeInput";
import { ScrollView, View, Dimensions } from "react-native";
import { unSecurePost } from "../../app/Http";
import AuthLayout from "../../modules/auth/AuthLayout";
import { messageEmit } from "../../app/AppEvent";
import { Button, Card, TopNavigation } from "@ui-kitten/components";
import { Loading, PageTitle } from "../../shared/PageUtil";
import ForgotPasswordForm from "../../modules/auth/ForgotPasswordForm";
import { useEffect, useState } from "react";
import { Auth } from "../../entities/Auth";
import { useFocusEffect } from "@react-navigation/native";

const ForgotPassword = (props: any) => {
  const [auth, setAuth] = useState(new Auth());
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const { navigation } = props;
  const [loadingIndicator, setLoadingIndicator] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setAuth(new Auth());
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

  const CardHeader = () => <TopNavigation alignment="center" title={() => PageTitle("Forgot Password")} />;
  const CardFooter = () => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Button onPress={navigateSignIn} appearance="filled" status="warning" style={{ flex: 1, margin: 8 }}>
        SignIn
      </Button>
      <Button
        onPress={handleSubmit(onFormSubmit)}
        appearance="filled"
        //accessoryLeft={loadingIndicator ? Loading : null}
        disabled={loadingIndicator}
        status="info"
        style={{ flex: 1, margin: 8 }}
      >
        Submit
      </Button>
    </View>
  );

  return (
    <AuthLayout name={"Login"}>
      <View style={{ width: dimensionWidth > 400 ? 350 : dimensionWidth }}>
        <Card
          header={CardHeader}
          footer={CardFooter}
          style={{ width: dimensionWidth > 400 ? 350 : dimensionWidth, paddingBottom: 16 }}
        >
          <ForgotPasswordForm control={control} errors={errors} auth={auth} />
        </Card>
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
