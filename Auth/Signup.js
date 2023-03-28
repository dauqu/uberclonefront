import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigate = useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/004/256/001/small/sign-up-flat-illustration-call-to-action-vector.jpg",
          }}
          style={{
            width: "100%",
            height: 300,
            resizeMode: "cover",
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
        }}
      >
        <View
          style={{
            marginTop: 4,
          }}
        >
          <Text style={tw`text-[18px] mt-4 `}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            style={tw`border-2 border-gray-300 rounded-md p-2 mt-2`}
          />
        </View>
        <View
          style={{
            marginTop: 4,
          }}
        >
          <Text style={tw`text-[18px] mt-4 `}>Email</Text>
          <TextInput
            placeholder="Enter your Email"
            style={tw`border-2 border-gray-300 rounded-md p-2 mt-2`}
          />
        </View>
        <View
          style={{
            marginTop: 4,
          }}
        >
          <Text style={tw`text-[18px] mt-4 `}>City</Text>
          <TextInput
            placeholder="Enter your City"
            style={tw`border-2 border-gray-300 rounded-md p-2 mt-2`}
          />
        </View>
        <View
          style={{
            marginTop: 4,
          }}
        >
          <Text style={tw`text-[18px] mt-4 `}>Phone</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <PhoneInput
              defaultCode="IN"
              layout="first"
              withShadow
              autoFocus
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textInput}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => navigate.navigate("Login")}
            style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneContainer: {
    width: "100%",
    height: 50,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    width: "75%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  textInput: {
    paddingVertical: 0,
  },
});
