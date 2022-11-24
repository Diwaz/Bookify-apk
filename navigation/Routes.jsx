import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Authstack from "./Authstack";
import Appstack from "./Appstack";
import { useSelector } from "react-redux";
import auth from "../redux/reducer/auth";

const Routes = () => {
  const userData = useSelector((state) => state.auth.userData);

  console.log(userData);

  return (
    <NavigationContainer>
      {userData?.data ? <Appstack /> : <Authstack />}
    </NavigationContainer>
  );
};

export default Routes;
