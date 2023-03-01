import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors } from "../../../utils/Colors";

const Input = ({ children, style, color, placeholderColor, ...rest }) => {
  const inputStyles = StyleSheet.flatten([
    color !== undefined ? { color } : { color: Colors.textLighter },
    style,
  ]);
  return (
    <TextInput
      style={inputStyles}
      cursorColor={Colors.textLighter}
      placeholderTextColor={
        placeholderColor !== undefined ? placeholderColor : Colors.gray
      }
      {...rest}
    >
      {children}
    </TextInput>
  );
};

export default Input;
