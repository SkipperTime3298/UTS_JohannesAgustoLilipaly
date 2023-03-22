import React, { useState } from "react";
import {Image,ImageBackground,StyleSheet,Text,TextInput,View,TouchableHighlight,TouchableOpacity,To,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import colors from "../config/colors";

function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}><Text
          ><Feather name="home" size={24} color="red" /></Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.header}>Profile Diri</Text>
        </View>
        <Image
          style={{ width: 140, height: 140, borderRadius: 10, top: -110 }}
          source={require('../assets/profile.jpg')}
        />
      <View style={styles.Gudang}>
        <TouchableOpacity onPress={() => navigation.navigate("Detailitem")}>
          <Text style={styles.buttonText}>Gudang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center"
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    padding: 5,
    color: "white",
    fontSize: 15,
    marginTop: 15,
  },
  Gudang: {
    width: 200,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
    overflow: "hidden",
    alignItems: "center",
  },
  top: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    paddingTop: 60,
    justifyContent: 'space-between'
  }
})
;

export default Homepage;