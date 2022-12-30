import React, { useState, useEffect, Fragment } from "react";
import { View } from "react-native";
import TypeInput from "../../types/TypeInput";
import TypePassword from "../../types/TypePassword";
import { Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import TypeCheckBox from "../../types/TypeCheckBox";

const SignInForm = ({ control, errors, auth }: any) => {
  const navigation = useNavigation();

  const navigateForgotPassword = () => {
    // @ts-ignore
    navigation.navigate("ForgotPassword");
  };

  return (
    <Fragment>
      <View>
        <TypeInput
          required
          id="username"
          attr="username"
          label="User Id"
          control={control}
          errors={errors}
          defaultValue={auth.username}
          rules={{ required: "UserId is required" }}
        />

        <TypePassword
          required
          id="password"
          attr="password"
          label="Password"
          control={control}
          errors={errors}
          defaultValue={auth.password}
          rules={{ required: "Password is required" }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text onPress={() => navigateForgotPassword()} category="c1">
            Forgot Password ?
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <TypeCheckBox
              required
              id="rememberMe"
              attr="rememberMe"
              label="Remember Me"
              control={control}
              errors={errors}
              defaultValue={auth.rememberMe}
            />
            <Text category="c1" style={{ marginLeft: 8 }}>
              Remember Me
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};
export default SignInForm;
