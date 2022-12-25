import * as React from "react";
import { View } from "react-native";

import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
//import { TextInput } from "react-native";
import { CheckBox, Input, Text } from "@ui-kitten/components";

const TypeCheckBox = ({
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
          <CheckBox  checked={value} onBlur={onBlur} onChange={onChange} />
        )}
        defaultValue={defaultValue}
        {...rest}
      />
    </View>
  );
};

export default TypeCheckBox;
