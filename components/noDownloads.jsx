import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Nodownloads = () => {
  return (
    <View
      style={{ height: 500, justifyContent: "center", alignItems: "center" }}
    >
      <Text
        style={{
          fontFamily: "RudaB",
          fontSize: 25,
        }}
      >
        No downloads available
      </Text>
    </View>
  );
};

export default Nodownloads;

const styles = StyleSheet.create({});
