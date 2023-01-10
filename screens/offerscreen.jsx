import { View, Text } from "react-native";
import React from "react";
import SuccessSVG from "../assets/SVGs/success";
import { Header } from "../components";

const OfferScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <SuccessSVG width={200} height={200} />
    </View>
  );
};

export default OfferScreen;
