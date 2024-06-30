import React, { forwardRef, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  Text,
} from "react-native";

import { Controller, Control } from "@/lib/react-hook-form";
import { Colors } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../Button";

type FormInputProp = {
  name: string;
  control?: Control<any>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  errorElements?: React.ReactNode;
} & TextInputProps;

export const FormInput = forwardRef<TextInput, FormInputProp>(
  (
    {
      placeholderTextColor = "#667085",
      errorElements,
      name,
      control,
      leftIcon,
      rightIcon,
      secureTextEntry,
      ...textInputProps
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prevState) => !prevState);
    };

    return control ? (
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, isTouched, isValidating },
        }) => (
          <>
            <View style={styles.inputContainer}>
              {leftIcon && (
                <View style={styles.iconContainer}>
                  <Button variant="text" style={styles.iconButton}>
                    {leftIcon}
                  </Button>
                </View>
              )}
              <TextInput
                ref={ref}
                style={[
                  styles.input,
                  leftIcon ? styles.inputWithLeftIcon : {},
                  rightIcon || secureTextEntry ? styles.inputWithRightIcon : {},
                  isTouched || isValidating ? styles.inputTouched : {},
                  error?.message ? styles.inputWithErrors : {},
                  { backgroundColor: "#F9FAFB" },
                ]}
                allowFontScaling={false}
                focusable={true}
                cursorColor={Colors.light.primary}
                placeholderTextColor={Colors.light.dark500}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={isPasswordVisible}
                {...textInputProps}
              />
              {secureTextEntry && (
                <Button
                  variant="text"
                  onPress={togglePasswordVisibility}
                  style={styles.iconButton}
                >
                  <MaterialIcons
                    name={!isPasswordVisible ? "visibility-off" : "visibility"}
                    size={21.5}
                    color={Colors.light.black}
                  />
                </Button>
              )}
              {rightIcon && (
                <View style={styles.iconContainer}>
                  <Button variant="text" style={styles.iconButton}>
                    {rightIcon}
                  </Button>
                </View>
              )}
            </View>
            {error && <Text style={styles.errorMessage}>{error.message}</Text>}
            {errorElements && errorElements}
          </>
        )}
      />
    ) : (
      <>
        <View style={styles.inputContainer}>
          {leftIcon && (
            <View style={styles.iconContainer}>
              <Button variant="text" style={styles.iconButton}>
                {leftIcon}
              </Button>
            </View>
          )}
          <TextInput
            ref={ref}
            style={[
              styles.input,
              leftIcon ? styles.inputWithLeftIcon : {},
              rightIcon || secureTextEntry ? styles.inputWithRightIcon : {},

              { backgroundColor: "#F9FAFB" },
            ]}
            allowFontScaling={false}
            focusable={true}
            cursorColor={Colors.light.primary}
            placeholderTextColor={Colors.light.dark500}
            secureTextEntry={isPasswordVisible}
            {...textInputProps}
          />
          {secureTextEntry && (
            <Button
              variant="text"
              onPress={togglePasswordVisibility}
              style={styles.iconButton}
            >
              <MaterialIcons
                name={!isPasswordVisible ? "visibility-off" : "visibility"}
                size={21.5}
                color={Colors.light.black}
              />
            </Button>
          )}
          {rightIcon && (
            <View style={styles.iconContainer}>
              <Button variant="text" style={styles.iconButton}>
                {rightIcon}
              </Button>
            </View>
          )}
        </View>
      </>
    );
  }
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.light.gray100,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 16,
    minHeight: 62,
    color: Colors.light.dark500,
  },
  inputWithErrors: {
    borderColor: Colors.light.red,
  },
  inputTouched: {
    borderColor: Colors.light.primary,
    color: Colors.light.dark500,
  },
  inputWithLeftIcon: {
    paddingLeft: 80,
  },
  inputWithRightIcon: {
    paddingRight: 80,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    paddingHorizontal: 0,
    minHeight: 20,
    marginHorizontal: 0,
    paddingVertical: 0,
    position: "absolute",
    right: 0,
  },
  errorMessage: {
    color: "red",
    marginTop: 0,
    fontSize: 11,
  },
});
