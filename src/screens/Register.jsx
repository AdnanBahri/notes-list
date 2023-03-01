import { Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "./Screen";
import { Bloc, Button, Input, Text } from "../components";
import { Colors } from "../utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Screen style={styles.center}>
      <Bloc style={{ flex: 1, width: "90%" }}>
        <Button
          color={Colors.mainLighter}
          radius={8}
          style={{
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 24,
          }}
          onClick={() => navigation.goBack()}
        >
          <Ionicons
            name="ios-chevron-back"
            size={24}
            color={Colors.whiteColor}
          />
        </Button>
        <Text
          align="left"
          h2
          color={Colors.whiteColor}
          style={{ marginVertical: 40 }}
        >
          Create an account
        </Text>
        <Bloc style={{ flex: 1, paddingBottom: 20 }} justify="space-between">
          <Bloc>
            <Bloc row style={styles.input}>
              <Ionicons
                name="mail"
                size={24}
                color={Colors.textLighter}
                style={{ marginRight: 8 }}
              />
              <Input
                placeholder="name@example.xyz"
                keyboardType="email-address"
                style={{ flex: 1 }}
                defaultValue={email}
                onChangeText={(text) => setEmail(text)}
              />
            </Bloc>
            <Bloc row style={styles.input}>
              <Ionicons
                name="ios-lock-closed"
                size={24}
                color={Colors.textLighter}
                style={{ marginRight: 8 }}
              />
              <Input
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(e) => setPassword(e.target.value)}
                style={{ flex: 1 }}
              />
            </Bloc>
            <Bloc row style={styles.input}>
              <Ionicons
                name="ios-lock-closed"
                size={24}
                color={Colors.textLighter}
                style={{ marginRight: 8 }}
              />
              <Input
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={(e) => setConfirmPassword(e.target.value)}
                style={{ flex: 1 }}
              />
            </Bloc>
            <Button
              onClick={(e) => console.log(email)}
              color={Colors.main}
              radius={8}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginTop: 16,
              }}
            >
              <Text color={Colors.whiteColor} align="center">
                Continue
              </Text>
            </Button>
          </Bloc>
        </Bloc>
      </Bloc>
    </Screen>
  );
};

export default Register;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 40,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#2e3644",
    borderRadius: 8,
    color: "#e7e1d7",
    marginBottom: 16,
  },
});
