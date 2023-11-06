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
import React, { useState } from "react";

function ButtonMain({ onPress, title }) {
 return (
  <TouchableOpacity
   style={styles.container}
   onPress={onPress}>
   <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
 );
}

export { ButtonMain };

const styles = StyleSheet.create({
 container: {
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 10,
  elevation: 3,
  backgroundColor: "#010409",
 },
 title: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#e6edf3",
 },
});
