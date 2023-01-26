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

const InstitutionDisplay = ({ sectionName }) => {
  const collegeData = [
    {
      id: 1,
      collegeName: "SXC",
      image: require("../assets/Cover/sxc.png"),
      address: "Maitighar,Ktm.",
      level: "+2/BE/CSIT",
    },
    {
      id: 2,
      collegeName: "APEX College",
      image: require("../assets/Cover/islington.png"),
      address: "DevkotaSadak,Ktm.",
      level: "BBA/BBS",
    },
    {
      id: 3,
      collegeName: "Islington College",
      image: require("../assets/Cover/islington.png"),
      address: "Kamal Marg, Ktm.",
      level: "BIT/BSCsit/BE",
    },
    {
      id: 4,
      collegeName: "IIMS",
      image: require("../assets/Cover/sxc.png"),
      address: "Tinkune, Ktm.",
      level: "BE/BIT/IT",
    },
    {
      id: 5,
      collegeName: "DAV college",
      image: require("../assets/Cover/islington.png"),
      address: "Jawalakhel,Lalitpur",
      level: "+2/BE",
    },
    {
      id: 6,
      collegeName: "IIMS",
      image: require("../assets/Cover/sxc.png"),
      address: "Tinkune, Ktm.",
      level: "BE/BIT/IT",
    },
    {
      id: 7,
      collegeName: "DAV college",
      image: require("../assets/Cover/islington.png"),
      address: "Jawalakhel,Lalitpur",
      level: "+2/BE",
    },
  ];

  const renderInstitute = ({ item }) => (
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
          {item.collegeName}
        </Text>
        <Text
          style={{
            fontFamily: "RudaR",
            fontSize: 10,
          }}
        >
          {item.address}
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
        data={collegeData}
        renderItem={renderInstitute}
      />
    </View>
  );
};

export default InstitutionDisplay;

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
