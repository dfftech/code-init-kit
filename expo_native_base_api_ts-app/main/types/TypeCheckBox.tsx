import * as React from "react";
import { View } from "react-native";

import { Controller } from "react-hook-form";
import { Checkbox } from "native-base";

const TypeCheckBox = ({ id, label, attr, defaultValue, children, control, errors, rules, required, disabled, ...rest }: any) => {
  return (
    <View style={{ paddingVertical: 4 }}>
      <Controller
        control={control}
        name={attr}
        id={id}
        fullWidth
        render={(props: any) => (
          <Checkbox defaultIsChecked={props.field.value} onChange={props.field.onChange} value={props.field.value} />
        )}
        defaultValue={defaultValue}
        {...rest}
      />
    </View>
  );
};

export default TypeCheckBox;
