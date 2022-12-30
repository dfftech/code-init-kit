import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from "react-native";

import TypePassword from "../../types/TypePassword";
import { messageEmit, sessionUserEvent } from "../../app/AppEvent";

import { useForm } from "react-hook-form";
import AppStorage from "../../app/AppStorage";
import { post } from "../../app/Http";

const ChangePassword = ({ name, children }: any) => {
  const [changePassword] = useState({ oldPassword: "", newPassword: "" });
  const user = AppStorage.getData("user");
  const { control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();
  const onFormSubmit = async (data: any) => {
    data.id = user.id;
    post("/auth/changepassword", data, true).subscribe((resData) => {
      console.log("Resp Data: ", resData);
      if (resData != null) {
        messageEmit(resData);
      }
    });
  };
  return (
    <View >
      {/*<Surface style={AppStyles.Box}>*/}
      {/*  <View style={{ padding: 16 }}>*/}
      {/*    <TypePassword*/}
      {/*      required*/}
      {/*      id="password"*/}
      {/*      label="Old Password"*/}
      {/*      name="oldPassword"*/}
      {/*      control={control}*/}
      {/*      errors={errors}*/}
      {/*      defaultValue={changePassword.oldPassword}*/}
      {/*      rules={{ required: "Old Password is required" }}*/}
      {/*    />*/}

      {/*    <TypePassword*/}
      {/*      required*/}
      {/*      id="newPassword"*/}
      {/*      label="New Password"*/}
      {/*      name="newPassword"*/}
      {/*      control={control}*/}
      {/*      errors={errors}*/}
      {/*      defaultValue={changePassword.newPassword}*/}
      {/*      rules={{ required: "New Password is required" }}*/}
      {/*    />*/}
      {/*    <Button mode="contained" onPress={handleSubmit(onFormSubmit)} style={styles.button}>*/}
      {/*      Submit*/}
      {/*    </Button>*/}
      {/*  </View>*/}
      {/*</Surface>*/}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChangePassword;
