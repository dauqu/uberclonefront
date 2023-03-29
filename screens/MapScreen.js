import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
const MapScreen = () => {
  return (
    <ScrollView>
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
      <View
        style={{
          padding: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Search Location
        </Text>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="From"
            style={{
              backgroundColor: "white",
              // shadow
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 1,
            }}
          />
          <View>
            <Entypo
              name="arrow-long-down"
              size={30}
              color="black"
              style={{
                margin: 20,
                textAlign: "center",
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Destination"
              style={{
                backgroundColor: "white",
                // shadow
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 1,
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 5,
                marginTop: 20,
                width: 200,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
