import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";
import Constants from "expo-constants";

const Screen = ({ children, style }) => (
  <SafeAreaView style={[styles.wrapper, style]}>{children}</SafeAreaView>
);

export default Screen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.mainDark,
    paddingTop: Constants.statusBarHeight,
  },
});
