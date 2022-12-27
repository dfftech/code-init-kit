import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Input, Text, Icon } from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "react-native";

const TypePassword = ({
  id,
  label,
  attr,
  defaultValue,
  children,
  control,
  errors,
  rules,
  required,
  disabled,
  ...rest
}: any) => {
  const [securePassword, setSecurePassword] = useState(true);

  const toggleSecureEntry = () => {
    setSecurePassword(!securePassword);
  };

  const renderIcon = (props: any) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon {...props} name={securePassword ? 'eye-off' : 'eye'}/>
      </TouchableWithoutFeedback>
  );

  return (
    <View style={{ width: "100%", paddingTop: 8, paddingBottom: 8 }}>
      <Controller
        control={control}
        name={attr}
        id={id}
        fullWidth
        render={(props: any) => (
          <Input
           // id={id}
            label={label}
           onChangeText={props.field.onChange}
            onBlur={props.field.onBlur}
            value={props.field.value}
            //accessoryRight={renderIcon}
            secureTextEntry={securePassword}
          />
        )}
        rules={rules}
        defaultValue={defaultValue}
        {...rest}
      />
      <Text appearance="hint" status="danger" category="c2">
        <ErrorMessage errors={errors} name={attr} />
      </Text>
    </View>
  );
};

export default TypePassword;
