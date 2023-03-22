import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MainScreen from "./app/screens/MainScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ImagePickerScreen from "./app/screens/ImagePickerScreen";
import CameraScreen from "./app/screens/CameraScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Image"
          component={Detailitem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={ProfileDiri}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor={"#20262B"} />
    </NavigationContainer>
  );
}