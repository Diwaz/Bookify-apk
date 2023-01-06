import { View, Text, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import { Dashboard, Header } from "../components";
import UpperComponent from "../components/UpperComponent";

import BottomComponent from "../components/bottomComponent";

const { width, height } = Dimensions.get("window");
const Cartscreen = () => {
  return (
    <SafeAreaView>
      <UpperComponent>
        <Header />
      </UpperComponent>
      <BottomComponent>
        <Dashboard
          cart
          checkOut
          //Always USE this DisplayP otherwise the app will crash
          displayP={"none"}
        />
      </BottomComponent>
    </SafeAreaView>
  );
};

export default Cartscreen;
