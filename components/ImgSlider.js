import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel-expo-46-compatible/src/carousel/Carousel";

const ImgSlider = () => {
  // code to render the images
  const data = [
    {
      title: "Hourly Rental",
      desc: "Ride from 1 to 12 hours",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4dNb39yy5Oepr9ullg8h-JstpVnSTWFIMA&usqp=CAU",
    },
    {
      title: "For Xl Ride",
      desc: "Ride from 1 to 12 hours",
      image:
        "https://st.depositphotos.com/14490296/58204/v/600/depositphotos_582046292-stock-illustration-male-personage-driving-car-serious.jpg",
    },
    {
      title: "For Offroading",
      desc: "Ride from 1 to 12 hours",
      image:
        "https://thumbs.dreamstime.com/b/man-drive-vehicle-alone-interior-car-trip-internal-space-black-salon-auto-driver-ride-carefully-get-to-destination-forest-170679544.jpg",
    },
    {
      title: "Family Trip",
      desc: "Ride from 1 to 12 hours",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFpX1BfxJwWZraVEyE0b5OtbJK1CoOQ5XRWKFMUTisDFi1wW6e8COA_hZLRXmrPinSFE&usqp=CAU",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <View>
          <Image
            style={{
              width: 300,
              height: 200,
              resizeMode: "cover",
              borderRadius: 10,
              marginTop: 10,
            }}
            source={{ uri: item.image }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: "#000",
            marginTop: 10,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#000",
          }}
        >
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
            marginBottom: 10,
          }}
        >
          Ways to plan with Uber
        </Text>
      </View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={300}
      ></Carousel>
    </View>
  );
};

export default ImgSlider;

const styles = StyleSheet.create({});
