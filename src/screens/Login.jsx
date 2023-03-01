import { Alert, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Screen from "./Screen";
import { Bloc, Button, Input, Text } from "../components";
import { Colors } from "../utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.center}>
      <Bloc style={{ flex: 1, width: "90%" }}>
        <Text
          align="left"
          h2
          color={Colors.whiteColor}
          style={{ marginTop: 40, marginBottom: 12 }}
        >
          Let's Sign You In
        </Text>
        <Text align="left" h4 color={Colors.whiteColor}>
          Welcome Back
        </Text>
        <Text
          align="left"
          h4
          color={Colors.whiteColor}
          style={{ marginBottom: 40 }}
        >
          Good to see you again!
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
                value={email}
                onChangeText={(e) => setEmail(e.target.value)}
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
            <Bloc row justify={"flex-end"}>
              <Button
                onClick={(e) =>
                  Alert.alert("Forgot Password", "Recover Your password soon")
                }
              >
                <Text color={Colors.blueColor}>Forgot Password?</Text>
              </Button>
            </Bloc>
            <Button
              onClick={(e) =>
                Alert.alert("Forgot Password", "Recover Your password soon")
              }
              color={Colors.main}
              radius={8}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginTop: 16,
              }}
            >
              <Text color={Colors.whiteColor} align="center">
                Sign in
              </Text>
            </Button>
          </Bloc>
          <Bloc row align="center" justify="center">
            <Text color={Colors.whiteColor}>Don't have an account? </Text>
            <Button onClick={(e) => navigation.navigate("Register")}>
              <Text weight={"600"} color={Colors.whiteColor}>
                Register
              </Text>
            </Button>
          </Bloc>
        </Bloc>
      </Bloc>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
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
