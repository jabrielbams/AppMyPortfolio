import "react-native-gesture-handler";
import React from "react";
import { Alert, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { ButtonMain } from "./components/atomics";

import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";

const Stack = createStackNavigator();

export default function App() {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Group>
     <Stack.Screen
      name='Login'
      component={Login}
      options={{
       title: "Login Screen",
      }}
     />

     <Stack.Screen
      name='Register'
      component={Register}
      options={{
       title: "Register Screen",
       headerLeft: null,
      }}
     />

     <Stack.Screen
      name='Home'
      component={Home}
      options={({ navigation }) => ({
       title: "Home",
       headerLeft: null,
       headerRight: () => {
        return (
         <TouchableOpacity
          style={{ paddingHorizontal: 20 }}
          onPress={() => {
           Alert.alert("Logout Berhasil");
           navigation.dispatch(StackActions.replace("Login"));
          }}>
          <Text>Logout</Text>
         </TouchableOpacity>
        );
       },
      })}
     />
    </Stack.Group>
   </Stack.Navigator>
  </NavigationContainer>
 );
}
