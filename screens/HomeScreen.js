import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import StartScreen from "./StartScreen";
// import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <StartScreen />
      {/* <View style={tw`p-5 mt-12 `}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
