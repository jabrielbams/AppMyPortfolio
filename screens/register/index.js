import {
 Text,
 View,
 SafeAreaView,
 StyleSheet,
 Image,
 Button,
 Alert,
 TouchableOpacity,
 ScrollView,
 TextInput,
 Pressable,
} from "react-native";
import React, { useState, useLayoutEffect, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { iconLogo } from "../../assets";
import { FormPassword, FormText } from "../../components/molecules";
import { ButtonMain } from "../../components/atomics";

const Register = ({ navigation }) => {
 return (
  <ScrollView>
   <View style={styles.container}>
    <View style={styles.logoContainer}>
     <Image
      style={styles.logoImg}
      source={iconLogo}
     />
    </View>
    <View style={styles.textContainer}>
     <Text style={styles.heading2}>Selamat Datang</Text>
     <Text style={{ ...styles.subheading3, marginTop: 10 }}>
      Daftar untuk melanjutkan yahh
     </Text>
    </View>

    <View style={{ flex: 1 }}>
     <FormText title='Nama lengkap' />
     <FormText title='Username/Email' />
     <FormPassword title='Password' />
     <FormPassword title='Confirm Password' />
    </View>

    <View style={{ flex: 1, marginTop: 32 }}>
     <ButtonMain title='Daftar' />

     <View
      style={{
       flexDirection: "row",
       justifyContent: "center",
       alignItems: "center",
       marginTop: 16,
      }}>
      <Text style={{ fontSize: 13, paddingRight: 2 }}>Sudah Punya Akun?</Text>
      <TouchableOpacity
       onPress={() => {
        navigation.navigate("Login");
       }}>
       <Text style={{ fontSize: 14, fontWeight: 600, color: "#638CCE" }}>
        Masuk sekarang
       </Text>
      </TouchableOpacity>
     </View>
    </View>
   </View>
  </ScrollView>
 );
};

export default Register;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 24,
  // backgroundColor: '#B40505'
 },
 logoContainer: {
  flex: 1,
  width: 90,
  height: 90,
  backgroundColor: "#FE5B6E",
  borderRadius: 10,
  justifyContent: "center",
 },
 formContainer: {
  flex: 1,
  marginTop: 16,
  justifyContent: "center",
 },
 textContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
 },
 botContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 16,
 },
 input: {
  height: 60,
  color: "grey",
  borderWidth: 1,
  borderRadius: 10,
  paddingLeft: 30,
  borderColor: "grey",
  // flexDirection: 'row',
  // justifyContent: 'space-between',
 },
 loginButton: {
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 10,
  elevation: 3,
  backgroundColor: "#3B95FF",
  marginTop: 64,
 },
 logoImg: {
  height: 50,
  width: 50,
  resizeMode: "contain",
  alignSelf: "center",
  justifyContent: "center",
 },
 passIcon: {
  position: "absolute",
  alignSelf: "flex-end",
  paddingEnd: 15,
 },
 textContainer: {
  marginTop: 24,
  marginBottom: 12,
 },
 heading2: {
  color: "black",
  fontWeight: "bold",
  justifyContent: "center",
  fontSize: 28,
 },
 subheading2: {
  fontSize: 16,
  color: "white",
 },
 subheading3: {
  color: "black",
  fontWeight: "light",
  fontSize: 14,
 },
});
