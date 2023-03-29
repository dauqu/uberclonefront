import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import tw from "twrnc";
import BottomTabNav from "../components/BottomTabNav";
const Body = () => {
  return (
    <>
      <View style={tw`p-5`}>
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
      </View>
    </>
  );
};

export default Body;

const styles = StyleSheet.create({});
