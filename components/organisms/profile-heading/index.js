import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { imgProfile } from "../../../assets";
import { ButtonMain } from "../../atomics";

const ProfileHeading = ({ profileName, profileDesc }) => {
 return (
  <View style={styles.profileContainer}>
   <View style={styles.images}>
    <Image
     source={imgProfile}
     style={styles.profileImages}
    />
   </View>
   <View style={styles.profileText}>
    <Text style={styles.profileName}>{profileName}</Text>
    <Text style={styles.profileDesc}>{profileDesc}</Text>
    <ButtonMain
     title={"My Profile"}
     styleContainer={styles.buttonMain}
    />
   </View>
  </View>
 );
};

export { ProfileHeading };

const styles = StyleSheet.create({
 profileContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
 },
 profileText: {
  paddingHorizontal: 13,
  flex: 1,
 },
 profileImages: {
  width: 100,
  height: 100,
  borderRadius: 50,
 },
 profileName: {
  fontWeight: "500",
  fontSize: 18,
  color: "#F1F8FF",
 },
 profileDesc: {
  fontSize: 12,
  marginTop: 8,
  marginBottom: 8,
  color: "#F1F8FF",
 },
});
