import * as React from "react";
import { ScrollView, View, Dimensions } from "react-native";

import { useForm } from "react-hook-form";

import { unSecurePost } from "../../app/Http";
import AuthLayout from "../../modules/auth/AuthLayout";
import { messageEmit } from "../../app/AppEvent";
import { useFocusEffect } from "@react-navigation/native";
import { Auth } from "../../entities/Auth";
import { useEffect, useState } from "react";
import { Button, Card, TopNavigation } from "@ui-kitten/components";
import { Loading, PageTitle } from "../../shared/PageUtil";
import ResetPasswordForm from "../../modules/auth/ResetPasswordForm";

const ResetPassword = (props: any) => {
  const [auth, setAuth] = useState(new Auth());
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
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
      setAuth((item) => ({ ...item, ...{ userid: props.route.params.userid } }));
    }, [])
  );

  useEffect(() => {
    reset(auth);
  }, [auth]);

  const CardHeader = () => <TopNavigation alignment="center" title={() => PageTitle("Reset Password")} />;
  const CardFooter = () => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Button onPress={navigateSignIn} appearance="filled" status="warning" style={{ flex: 1, margin: 8 }}>
        SignIn
      </Button>
      <Button
        onPress={handleSubmit(onFormSubmit)}
        appearance="filled"
    //    accessoryLeft={loadingIndicator ? Loading : null}
        disabled={loadingIndicator}
        status="info"
        style={{ flex: 1, margin: 8 }}
      >
        Submit
      </Button>
    </View>
  );

  return (
    <AuthLayout>
      <Card
        header={CardHeader}
        footer={CardFooter}
        style={{ width: dimensionWidth > 400 ? 350 : dimensionWidth, paddingBottom: 16 }}
      >
        <ResetPasswordForm control={control} errors={errors} auth={auth} />
      </Card>
    </AuthLayout>
  );
};

export default ResetPassword;
