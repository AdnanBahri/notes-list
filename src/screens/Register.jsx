import { Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "./Screen";
import { Bloc, Button, Input, Text } from "../components";
import { Colors } from "../utils/Colors";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email.").required("The email is Required"),
  password: Yup.string()
    .required("The password is Required.")
    .min(8, "Too Short"),
  confirmPassword: Yup.string()
    .required("Please Confirm your Password")
    .oneOf([Yup.ref("password")], "Your Passwords do not Match"),
});

const Register = ({ navigation }) => {
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
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) =>
              Alert.alert("Register", JSON.stringify(values))
            }
          >
            {({
              values,
              isValid,
              isSubmitting,
              setFieldTouched,
              errors,
              touched,
              handleSubmit,
              handleChange,
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
                      autoCapitalize={false}
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
                      autoCapitalize={false}
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
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      secureTextEntry
                      autoCapitalize={false}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={() => setFieldTouched("confirmPassword")}
                      value={values.confirmPassword}
                      style={{ flex: 1 }}
                    />
                  </Bloc>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text
                      color={Colors.errorRed}
                      size={12}
                      style={{ marginLeft: 4 }}
                    >
                      {errors.confirmPassword}
                    </Text>
                  )}
                </Bloc>
                <Button
                  onClick={handleSubmit}
                  disabled={!isValid || isSubmitting}
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
            )}
          </Formik>
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
    marginBottom: 4,
  },
});
