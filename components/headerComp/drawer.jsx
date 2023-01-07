import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const DrawerC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ flex: 1, display: "flex", alignItems: "center" }}

      // onPress={()=>navigation.openDrawer()}
    >
      <Ionicons name="apps-outline" size={24} color={"#1C2363"} />
    </TouchableOpacity>
  );
};

export default DrawerC;
