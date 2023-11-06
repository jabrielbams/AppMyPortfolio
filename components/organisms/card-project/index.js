import React, { useState, useLayoutEffect } from "react";
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
import { ButtonCircle, LikeButton, DislikeButton } from "../../atomics";

function CardProject({ image, title, desc, onpress }) {
 return (
  <View>
   <View style={styles.container}>
    <Image
     style={styles.image}
     source={image}
    />
    <View style={styles.caption}>
     <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
     </View>
     <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
      <DislikeButton />
      <LikeButton />
     </View>
     <ButtonCircle onPress={onpress} />
    </View>
   </View>
  </View>
 );
}

export { CardProject };

const styles = StyleSheet.create({
 container: {
  // flex: 1,
  padding: 12,
  marginTop: 16,
  backgroundColor: "white",
  borderRadius: 15,
 },
 image: {
  width: "100%",
  height: 160,
  alignSelf: "center",
  borderRadius: 10,
 },
 caption: {
  flex: 1,
  maxHeight: 70,
  flexDirection: "row",
  justifyContent: "space-between",
 },
 textContainer: {
  flex: 1,
  maxHeight: 120,
  maxWidth: 220,
 },
 title: {
  color: "black",
  textAlign: "left",
  fontWeight: "bold",
  justifyContent: "center",
  fontSize: 20,
  paddingTop: 10,
 },
 desc: {
  color: "black",
  textAlign: "left",
  fontWeight: "semibold",
  justifyContent: "center",
  fontSize: 14,
 },
});
