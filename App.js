import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import Homepage from "./app/screens/Homepage";
import Detailitem from "./app/screens/Detailitem";
import ProfileDiri from "./app/screens/ProfileDiri";

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