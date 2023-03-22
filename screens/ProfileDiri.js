import { React, useState, component } from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, ScrollView, Icon } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const ProfileDiri = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}><Text
          ><Feather name="home" size={24} color="red" /></Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.header}>Profile Saya</Text>
        </View>
        <Image
          style={{ width: 140, height: 140, borderRadius: 10, top: -110 }}
          source={require('../assets/fotosaya.jpg')}
        />
        <View>
          <Text style={styles.headerNama}>{'\n'}{'\n'}Johannes Agusto Lilipaly / 20 Tahun</Text>
        </View>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Header style
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  // Container Style
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
  },
  // Card style
  card: {
    top: 20,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding: 40,
  },
});
export default ProfileDiri;