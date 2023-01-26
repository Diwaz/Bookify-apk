import { View, Text, TouchableOpacity, Image } from "react-native";
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
      <Image
        source={{
          uri: `https://shineducation.com/static/media/logo.494d7a3e2d312cb8a42b.png`,
        }}
        style={{
          width: 30,
          height: 30,
        }}
      />
      {/* <Ionicons name="apps-outline" size={24} color={"#1C2363"} /> */}
    </TouchableOpacity>
  );
};

export default DrawerC;
