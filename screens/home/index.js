import React, { useState } from "react";
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
} from "react-native";
import { imgPorto1, imgPorto2, imgProfile } from "../../assets";
import { ButtonMain } from "../../components/atomics";
import { CardProject } from "../../components/organisms";

const Home = ({ navigation }) => {
 const data = [
  {
   id: 1,
   title: "Dummy Project",
   desc: "Web Design Project",
   img: require("../../assets/images/porto1.png"),
  },
  {
   id: 2,
   title: "Dummy Project",
   desc: "Web Design Project",
   img: require("../../assets/images/porto2.png"),
  },
 ];

 return (
  <ScrollView>
   <View style={styles.profileContainer}>
    <View style={styles.images}>
     <Image
      source={imgProfile}
      style={styles.profileImages}
     />
    </View>
    <View style={styles.profileText}>
     <Text style={styles.profileName}>Jabriel Bamasena Javier Rahardjanto</Text>
     <Text style={styles.profileDesc}>Mobile Developer</Text>
    </View>
   </View>
   <View style={styles.btn}>
    <ButtonMain title={"Contact Me"} />
   </View>
   <View style={styles.container}>
    {data.map((item) => {
     return (
      <CardProject
       image={item.img}
       title={item.title}
       desc={item.desc}
      />
     );
    })}
   </View>
  </ScrollView>
 );
};

export default Home;

const styles = StyleSheet.create({
 safeArea: {
  backgroundColor: "#010409",
 },
 container: {
  flex: 1,
  justifyContent: "center",
  backgroundColor: "#ecf0f1",
  padding: 20,
 },
 profileContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "start",
  backgroundColor: "#ecf0f1",
  paddingTop: 50,
  padding: 20,
  flex: 1,
 },
 profileText: {
  paddingHorizontal: 13,
  flex: 1,
 },
 profileImages: {
  width: 90,
  height: 90,
  borderRadius: 50,
 },
 profileName: {
  fontWeight: "800",
  fontSize: 16,
  color: "#010409",
 },
 profileDesc: {
  fontSize: 12,
  marginTop: 4,
  marginBottom: 8,
  color: "#010409",
 },
 btn: {
  paddingHorizontal: 20,
 },
});
