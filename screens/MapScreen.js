import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MapScreen = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png",
        }}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
