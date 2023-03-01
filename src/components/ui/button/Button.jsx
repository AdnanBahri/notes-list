import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ children, style, color, radius, onClick, ...rest }) => {
  const buttonStyles = StyleSheet.flatten([
    color !== undefined && { backgroundColor: color },
    radius !== undefined && { borderRadius: radius },
    style,
  ]);
  return (
    <TouchableOpacity onPress={onClick} style={buttonStyles} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
