import React, { Fragment, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useForm } from "react-hook-form";
import { unSecurePost } from "../../app/Http";
import AppStorage from "../../app/AppStorage";

import AuthLayout from "../../modules/auth/AuthLayout";
import {Button, Card, Text, TopNavigation} from "@ui-kitten/components";
import { Loading, PageTitle } from "../../shared/PageUtil";
import SignInForm from "../../modules/auth/SignInForm";
import {useFocusEffect, useNavigation, useNavigationContainerRef} from "@react-navigation/native";
import { Auth } from "../../entities/Auth";

const SignIn = (props: any) => {
  const [auth, setAuth] = useState(new Auth());
  const { control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();
  const navigation = useNavigation();
  const [loadingIndicator, setLoadingIndicator] = React.useState(false);

  const onFormSubmit =  (data: any) => {
    data.provider = "email";
   // setLoadingIndicator(true);
    navigation.navigate('AppHome');
    unSecurePost("/auth/signin", data, true).subscribe(async (resData) => {
      console.log("Resp Data: ", resData);
      setLoadingIndicator(false);
      if (resData != null) {
        if (auth.rememberMe === true) {
           AppStorage.setData("RememberMe", data);
        } else {
           AppStorage.removeData("RememberMe");
        }
        navigation.navigate('AppHome');
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

  const CardHeader = () => <TopNavigation alignment="center" title={() => PageTitle("SignIn")} />;
  const CardFooter = () => (
    <Button
      onPress={handleSubmit(onFormSubmit)}
      appearance="filled"
      // accessoryLeft={loadingIndicator ? Loading : null}
      disabled={loadingIndicator}
      status="info"
      style={{ flex: 1, margin: 8 }}
    >
      Submit
    </Button>
  );

  return (
    <Fragment>
      <AuthLayout name={"Login"}>
        <Card
          header={CardHeader}
          footer={CardFooter}
          style={{ width: dimensionWidth > 400 ? 350 : dimensionWidth, paddingBottom: 16 }}
        >
          <SignInForm control={control} errors={errors} auth={auth} />
        </Card>
      </AuthLayout>
    </Fragment>
  );
};

export default SignIn;
