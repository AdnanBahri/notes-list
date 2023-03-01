import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Screen = ({ children, style }) => (
  <SafeAreaView style={[styles.wrapper, style]}>{children}</SafeAreaView>
);

export default Screen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: Colors.mainDark,
    paddingTop: Constants.statusBarHeight,
  },
});
