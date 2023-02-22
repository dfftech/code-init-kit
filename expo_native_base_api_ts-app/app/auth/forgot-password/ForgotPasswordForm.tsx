import React, { useState, useEffect, Fragment } from "react";
import { View } from "react-native";
import TypeInput from "../../../types/TypeInput";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordForm = ({ control, errors, auth }: any) => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <View>
        <TypeInput
          required
          id="userid"
          attr="userid"
          label="User Id"
          control={control}
          errors={errors}
          defaultValue={auth.userid}
          rules={{ required: "UserId is required" }}
        />
      </View>
    </Fragment>
  );
};
export default ForgotPasswordForm;
