import { forwardRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  TextStyle,
  Text,
} from "react-native";

import { Colors } from "../../constants/Colors";

type ColorScheme = {
  [key in colorType]: {
    [key in variants]: TextStyle;
  };
};

const colorScheme: ColorScheme = {
  primary: StyleSheet.create({
    outlined: {
      borderColor: Colors.light.primary,
      color: Colors.light.primary,
    },
    text: {
      color: Colors.light.primary,
      borderColor: "transparent",
    },
    filled: {
      backgroundColor: Colors.light.primary,
      color: Colors.light.white,
      borderColor: Colors.light.primary,
    },
  }),
  secondary: StyleSheet.create({
    outlined: {
      borderColor: "#8B5CF6",
      color: "#8B5CF6",
    },
    text: {
      color: "#8B5CF6",
    },
    filled: {},
  }),
  tertiary: StyleSheet.create({
    outlined: {
      borderColor: "#F87171",
      color: "#F87171",
    },
    text: {
      color: "#F87171",
    },
    filled: {},
  }),
};

const sizes = StyleSheet.create({
  xs: {
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  sm: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  md: {
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 38,
    borderRadius: 30,
  },
  lg: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  xl: {
    fontSize: 20,
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
});

type colorType = "primary" | "secondary" | "tertiary";
type variants = "filled" | "outlined" | "text";

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }
  | { startIcon: React.ReactElement; endIcon: React.ReactElement };

type ButtonTypeProps = TouchableOpacityProps & {
  variant?: variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  color?: colorType;
  onPress?: () => void;
  noSpaceAround?: boolean;
  textColor?: string;
  textStyle?: TextStyle;
} & IconProps;

const MainButton = forwardRef<TouchableOpacity, ButtonTypeProps>(
  (
    {
      // type = 'button',
      style,
      color = "primary",
      variant = "filled",
      size = "md",
      isLoading = false,
      startIcon,
      endIcon,
      noSpaceAround,
      textColor,
      textStyle,
      children,
      ...restProps
    },
    ref
  ) => {
    const buttonStyle = [
      styles.button,
      sizes[size],
      colorScheme[color][variant],
      noSpaceAround ? styles.noSpaceAround : {},
      style,
    ];
    const _textColor = {
      color: textColor ?? colorScheme[color][variant].color,
    };

    return (
      <TouchableOpacity
        ref={ref}
        disabled={restProps.disabled || isLoading}
        activeOpacity={0.4}
        style={buttonStyle}
        {...restProps}
      >
        {startIcon && <View style={styles.icon}>{startIcon}</View>}
        <Text style={[styles.text, _textColor, textStyle]}>{children}</Text>

        {endIcon && <View style={styles.icon}>{endIcon}</View>}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minWidth: 100,
    fontWeight: 500,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    fontWeight: "500",
  },
  noSpaceAround: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
    paddingVertical: 0,
    minWidth: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

// MainButton.displayName = 'Button';

export const Button = MainButton;
