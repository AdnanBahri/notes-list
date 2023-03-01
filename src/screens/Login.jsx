import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 40,
  },
  input: {
    width: "90%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#2e3644",
    borderRadius: 8,
    color: "#e7e1d7",
  },
});
