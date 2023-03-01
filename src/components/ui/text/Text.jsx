import React from "react";
import { StyleSheet, Text as RNText } from "react-native";

const Text = ({
  children,
  h1,
  h2,
  h3,
  h4,
  p,
  style,
  color,
  size,
  weight,
  align,
  ...rest
}) => {
  const textStyles = StyleSheet.flatten([
    { fontSize: 16, fontWeight: "400" },
    h1 !== undefined && { fontSize: 36, fontWeight: "800" },
    h2 !== undefined && { fontSize: 28, fontWeight: "700" },
    h3 !== undefined && { fontSize: 24, fontWeight: "600" },
    h4 !== undefined && { fontSize: 22, fontWeight: "500" },
    p !== undefined && { fontSize: 18 },
    color !== undefined && { color: color },
    size !== undefined && { fontSize: size },
    weight !== undefined && { fontWeight: weight },
    align !== undefined && { textAlign: align },
    style,
  ]);
  return (
    <RNText style={textStyles} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
