import * as React from "react";
import { View } from "react-native";

import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
//import { TextInput } from "react-native";
import { Input, Text } from "@ui-kitten/components";

const TypeInput = ({
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
  return (
    <View style={{ paddingVertical: 4 }}>
      <Controller
        control={control}
        name={attr}
        id={id}
        fullWidth
        render={({ onChange, onBlur, value }: any) => (
          <Input label={label} onChangeText={onChange} onBlur={onBlur} value={value}  />
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

export default TypeInput;
