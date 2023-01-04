import * as React from "react";
import { View } from "react-native";

import { Controller } from "react-hook-form";
import { Checkbox } from "native-base";

const TypeCheckBox = ({ id, label, attr, defaultValue, children, control, errors, rules, required, disabled, ...rest }: any) => {
  const [checked, setChecked] = React.useState(defaultValue);
  React.useEffect(() => {
    if (defaultValue != null) {
      setChecked(defaultValue);
    }
  }, [defaultValue]);
  return (
    <View style={{ paddingVertical: 4 }}>
      <Controller
        control={control}
        name={attr}
        id={id}
        fullWidth
        render={(props: any) => (
          <Checkbox
            defaultIsChecked={checked}
            colorScheme="info"
            onChange={(val: any) => {
              setChecked(val);
              props.field.onChange(val);
            }}
            isChecked={checked}
            value={attr}
            isDisabled={disabled}
          />
        )}
        defaultValue={defaultValue}
        {...rest}
      />
    </View>
  );
};

export default TypeCheckBox;
