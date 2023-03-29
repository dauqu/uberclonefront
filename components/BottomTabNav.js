import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../screens/Profile";
import MapScreen from "../screens/MapScreen";
import Body from "../screens/Body";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
const BottomTabNav = () => {
  const Tab = createMaterialBottomTabNavigator();

  // how to add icon in bottom tab navigator
  // https://reactnavigation.org/docs/material-bottom-tab-navigator/

  return (
    <Tab.Navigator initialRouteName="Body">
      <Tab.Screen
        name="Body"
        component={Body}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Services",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="apple-keyboard-command"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    // <View>
    //   <Text>BottomTabNav</Text>
    // </View>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
