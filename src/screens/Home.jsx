import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import { Button, Text } from "../components";
import { Colors } from "../utils/Colors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";

const Home = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Screen>
      <Text h2 color={Colors.whiteColor}>
        Home
      </Text>
      <Button
        onClick={() => dispatch(logout())}
        color={Colors.main}
        radius={8}
        style={{
          paddingVertical: 8,
          paddingHorizontal: 12,
          marginTop: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text color={Colors.whiteColor} align="center">
          {loading ? (
            <ActivityIndicator color={Colors.whiteColor} size={24} />
          ) : (
            "Logout"
          )}
        </Text>
      </Button>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.mainDark,
  },
});
