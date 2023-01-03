import * as React from "react";
import { View } from "react-native";

import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "native-base";
//import { TextInput } from "react-native";

const TypeInput = ({ id, label, attr, defaultValue, children, control, errors, rules, required, disabled, ...rest }: any) => {
  return (
    <View style={{ paddingVertical: 4 }}>
      <Controller
        control={control}
        name={attr}
        id={id}
        fullWidth
        render={(props: any) => (
          <Input
            variant="outline"
            onChangeText={props.field.onChange}
            onBlur={props.field.onBlur}
            value={props.field.value}
            placeholder={label}
          />
        )}
        rules={rules}
        defaultValue={defaultValue}
        {...rest}
      />
      {/* <ErrorMessage errors={errors} name={attr} /> */}
    </View>
  );
};

export default TypeInput;
