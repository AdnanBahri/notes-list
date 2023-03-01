import React from "react";
import { StyleSheet, View } from "react-native";

const Bloc = ({
  children,
  style,
  flex,
  row,
  color,
  align,
  justify,
  ...rest
}) => {
  const blocStyles = StyleSheet.flatten([
    { width: "100%" },
    flex !== undefined && { flex },
    row !== undefined && { flexDirection: "row" },
    color !== undefined && { backgroundColor: color },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
    style,
  ]);
  return (
    <View style={blocStyles} {...rest}>
      {children}
    </View>
  );
};

export default Bloc;
