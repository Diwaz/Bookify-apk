import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

const { height, width } = Dimensions.get("window");

const CategoryDisplay = ({ sectionName }) => {
  const bookData = [
    {
      id: 1,
      bookName: "Data Structure & Algorithms",
      image: require("../assets/Cover/cover1.jpeg"),
      author: "Hari Bdr Neupane",
      views: 4567,
      upDate: "7 days",
      price: 675,
    },
    {
      id: 2,
      bookName: "The King of Drugs",
      image: require("../assets/Cover/cover2.jpg"),
      author: "Nora Barret",
      views: 567,
      upDate: "1 day",
      price: 1000,
    },
    {
      id: 3,
      bookName: "Creative Business",
      image: require("../assets/Cover/cover3.jpg"),
      author: "Allan Watts",
      views: 64567,
      upDate: "3 months",
      price: 6750,
    },
    {
      id: 4,
      bookName: "Creative Ideas",
      image: require("../assets/Cover/cover4.jpg"),
      author: "Andrew Schulz",
      views: 40567,
      upDate: "7 days",
      price: 300,
    },
    {
      id: 5,
      bookName: "Creative Brain",
      image: require("../assets/Cover/cover5.jpg"),
      author: "George R. R. Martin",
      views: 91345,
      upDate: "21 days",
      price: 2000,
    },
  ];

  const renderBooks = ({ item }) => (
    <View style={styles.itemWrapper}>
      {/* <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View> */}
      <View style={styles.imageWrapper}>
        <Image source={`${item.image}`} style={styles.image} />
      </View>
      <View style={styles.infowrapper}>
        <Text
          style={{
            fontFamily: "RudaR",
            color: "#1C2363",
            fontSize: 16,
          }}
        >
          {item.bookName}
        </Text>
        <Text
          style={{
            fontFamily: "RudaR",
            fontSize: 10,
          }}
        >
          {item.author}
        </Text>
      </View>
      <View style={styles.controlWrapper}>
        <View style={styles.controlLayout}>
          <Text
            style={{
              fontFamily: "RudaB",
              color: "#009343",
            }}
          >
            {" "}
            Rs. {item.price}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <View
        style={{
          height: 50,
          justifyContent: "space-between",
          alignItems: "center",

          paddingHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#1C2363",
          }}
        >
          {sectionName}
        </Text>
        <Ionicons name="notifications-outline" size={25} />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={bookData}
        renderItem={renderBooks}
      />
    </View>
  );
};

export default CategoryDisplay;

const styles = StyleSheet.create({
  itemWrapper: {
    width: width * 0.98,
    // backgroundColor: "#e2e2e2",
    borderBottomColor: "#989898",
    // borderBottomWidth: 1,
    height: height * 0.1,
    margin: 4,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: width * 0.08,
    height: height * 0.08,
  },
  imageWrapper: {
    flex: 1,
  },
  infowrapper: {
    flex: 2,
    justifyContent: "space-between",
  },
  controlWrapper: {
    flex: 1,
  },
  controlLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
