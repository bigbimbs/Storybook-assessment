import React, { forwardRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Controller, Control } from "@/lib/react-hook-form";

import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants";

interface CheckboxProps {
  name: string;
  control?: Control<any>;
  label?: string;
  labelStyle?: any;
  checkedColor?: string;
  uncheckedColor?: string;
}

export const Checkbox = forwardRef<TouchableOpacity, CheckboxProps>(
  (
    {
      name,
      control,
      label,
      labelStyle,
      checkedColor = Colors.light.primary,
      uncheckedColor = "gray",
    },
    _ref
  ) => {
    const [checked, setChecked] = useState<boolean>(false);

    const toggleCheckbox = () => {
      const currentValue = !checked;
      setChecked(currentValue);

      return !checked;
    };

    return control ? (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                const value = toggleCheckbox();
                onChange(value ? true : undefined);
              }}
              onBlur={onBlur}
              style={styles.container}
            >
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={30}
                color={
                  checked
                    ? checkedColor
                    : error?.message
                    ? "red"
                    : uncheckedColor
                }
              />
              <Text style={[styles.label, labelStyle]}>{label}</Text>
            </TouchableOpacity>
            {/* {error && <Text style={styles.errorMessage}>{error.message}</Text>} */}
          </View>
        )}
      />
    ) : (
      <View>
        <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
          <MaterialIcons
            name={checked ? "check-box" : "check-box-outline-blank"}
            size={30}
            color={checked ? checkedColor : uncheckedColor}
          />
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </TouchableOpacity>
        {/* {error && <Text style={styles.errorMessage}>{error.message}</Text>} */}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
  errorMessage: {
    color: Colors.light.red,
    marginTop: 0,
    fontSize: 11,
  },
});
