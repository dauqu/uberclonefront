import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Profile = () => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "black",
            }}
          >
            UserName
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 7,
              alignItems: "center",
              width: 100,
              backgroundColor: "#e1dede",
              borderRadius: 50,
              padding: 5,
              justifyContent: "space-evenly",
            }}
          >
            <View>
              {/* star icon */}
              <Icon name="star" type="antdesign" size={17} />
            </View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "black",
              }}
            >
              5.0
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: "#e1dede",
            borderRadius: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Icon name="user" type="antdesign" size={20} /> */}
          {/* user image */}
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
            }}
            style={{ width: 65, height: 65, borderRadius: 65 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
