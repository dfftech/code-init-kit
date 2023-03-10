import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { TouchableWithoutFeedback } from "react-native";
import {Icon, Input, Text} from "native-base";

const TypePassword = ({ id, label, attr, defaultValue, children, control, errors, rules, required, disabled, ...rest }: any) => {
  const [securePassword, setSecurePassword] = useState(true);

  const toggleSecureEntry = () => {
    setSecurePassword(!securePassword);
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={securePassword ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <View style={{ paddingVertical: 4 }}>
      <Controller
        control={control}
        name={attr}
        id={id}
        fullWidth
        render={(props: any) => (
          <Input
            // id={id}

            onChangeText={props.field.onChange}
            onBlur={props.field.onBlur}
            value={props.field.value}
            //accessoryRight={renderIcon}
            secureTextEntry={securePassword}
            placeholder={label}
          />
        )}
        rules={rules}
        defaultValue={defaultValue}
        {...rest}
      />
        <Text fontSize="xs" style={{color: "red"}}><ErrorMessage errors={errors} name={attr} /> </Text>
    </View>
  );
};

export default TypePassword;
