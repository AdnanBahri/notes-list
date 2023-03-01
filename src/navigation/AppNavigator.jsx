import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";

const AuthStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default AppNavigator;
