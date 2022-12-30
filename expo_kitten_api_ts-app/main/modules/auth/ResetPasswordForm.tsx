import React, { useState, useEffect, Fragment } from "react";
import { View } from "react-native";
import TypeInput from "../../types/TypeInput";
import { useNavigation } from "@react-navigation/native";
import AuthLayout from "./AuthLayout";
import TypePassword from "../../types/TypePassword";

const ResetPasswordForm = ({ control, errors, auth }: any) => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <View>
        <TypeInput
          required
          id="userid"
          attr="userid"
          label="User Id"
          name="userid"
          control={control}
          errors={errors}
          defaultValue={auth.userid}
          rules={{ required: "UserId is required" }}
        />
        <TypeInput
          required
          id="token"
          label="Token"
          attr="token"
          control={control}
          errors={errors}
          defaultValue={auth.token}
          rules={{ required: "Token is required" }}
        />
        <TypePassword
          required
          id="password"
          label="Password"
          attr="password"
          control={control}
          errors={errors}
          defaultValue={auth.password}
          rules={{ required: "Password is required" }}
        />
      </View>
    </Fragment>
  );
};
export default ResetPasswordForm;
