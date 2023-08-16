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
import { useSelector } from "react-redux";
const { height, width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const BooksDisplay = ({ sectionName }) => {
  const navigation = useNavigation();

  const bookData = useSelector((state) => state.workflow.initialBookData);

  const renderBooks = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate("Details", {
          id: item._id,
          bookName: item.name,
          bookImg: item.image,
          bookAuth: item.author,
          views: item.views,
          uptime: item.upDate,
          price: item.price,
          description: item.description,
        });
      }}
    >
      <View style={styles.itemWrapper}>
        {/* <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View> */}
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: `https://shineducation.com${item.image}` }}
            style={styles.image}
          />
        </View>
        <View style={styles.infowrapper}>
          <Text
            style={{
              fontFamily: "RudaR",
              color: "#1C2363",
              fontSize: 16,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: "RudaR",
              fontSize: 14,
            }}
          >
            Rs {item.price}
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
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={"#1C2363"}
              />
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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

export default BooksDisplay;

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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: width * 0.15,
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