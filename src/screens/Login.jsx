import { ActivityIndicator, Alert, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "./Screen";
import { Bloc, Button, Input, Text } from "../components";
import { Colors } from "../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../redux/slices/AuthSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email.").required("The email is Required"),
  password: Yup.string()
    .required("The password is Required.")
    .min(8, "Too Short"),
});

const Login = ({ navigation }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogin = (values) => dispatch(login({ ...values }));

  useEffect(() => {
    if (isAuthenticated) console.log("Authentication passes Successfully");
  }, [loading]);
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
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => handleLogin(values)}
          >
            {({
              isValid,
              isSubmitting,
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              setFieldTouched,
            }) => (
              <Bloc>
                <Bloc
                  style={{
                    marginBottom: 16,
                  }}
                >
                  <Bloc row style={styles.input}>
                    <Ionicons
                      name="mail"
                      size={24}
                      color={Colors.textLighter}
                      style={{ marginRight: 8 }}
                    />
                    <Input
                      name="email"
                      placeholder="name@example.xyz"
                      keyboardType="email-address"
                      style={{ flex: 1 }}
                      onChangeText={handleChange("email")}
                      onBlur={() => setFieldTouched("email")}
                      value={values.email}
                    />
                  </Bloc>
                  {touched.email && errors.email && (
                    <Text
                      color={Colors.errorRed}
                      size={12}
                      style={{ marginLeft: 4 }}
                    >
                      {errors.email}
                    </Text>
                  )}
                </Bloc>
                <Bloc
                  style={{
                    marginBottom: 16,
                  }}
                >
                  <Bloc row style={styles.input}>
                    <Ionicons
                      name="ios-lock-closed"
                      size={24}
                      color={Colors.textLighter}
                      style={{ marginRight: 8 }}
                    />
                    <Input
                      name="password"
                      placeholder="Password"
                      secureTextEntry
                      onChangeText={handleChange("password")}
                      onBlur={() => setFieldTouched("password")}
                      value={values.password}
                      style={{ flex: 1 }}
                    />
                  </Bloc>
                  {touched.password && errors.password && (
                    <Text
                      color={Colors.errorRed}
                      size={12}
                      style={{ marginLeft: 4 }}
                    >
                      {errors.password}
                    </Text>
                  )}
                </Bloc>
                <Bloc row justify={"flex-end"}>
                  <Button onClick={handleSubmit}>
                    <Text color={Colors.blueColor}>Forgot Password?</Text>
                  </Button>
                </Bloc>
                <Button
                  onClick={handleSubmit}
                  color={Colors.main}
                  radius={8}
                  disabled={!isValid || isSubmitting}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 12,
                    marginTop: 16,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text weight={"500"} color={Colors.whiteColor} align="center">
                    {loading ? (
                      <ActivityIndicator color={Colors.whiteColor} size={24} />
                    ) : (
                      "Sign in"
                    )}
                  </Text>
                </Button>
              </Bloc>
            )}
          </Formik>
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
    marginBottom: 4,
  },
});
