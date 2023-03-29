import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomTabNav from "../components/BottomTabNav";

const MainScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <BottomTabNav />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
