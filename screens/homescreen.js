import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dashboard, Header, List } from "../components";
import UpperComponent from "../components/UpperComponent";
import MidComponent from "../components/midComponent";
import BottomComponent from "../components/bottomComponent";

const { width, height } = Dimensions.get("window");
const Homescreen = ({ navigation }) => {
  const dashData = {
    title: "Find all books at bookify",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in dolorem tempore, quae laboriosam distinctio.",
  };

  const [loaded] = useFonts({
    RudaR: require("../assets/fonts/Ruda-Regular.ttf"),
    RudaB: require("../assets/fonts/Ruda-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={style.mainwrapper}>
      <UpperComponent>
        <Header />
      </UpperComponent>
      {/* <MidComponent>
      
      <Dashboard 
      btn 
      title={dashData.title}
      description={dashData.description}
      Info
      bell
      welcome
      //Always USE this DisplayP otherwise the app will crash
      displayP={'flex'}
      
      />
      
      </MidComponent>
     
      <BottomComponent>

     <List category title='Top Category'/>
     <List college title='Top Rated Colleges'/>
      </BottomComponent> */}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  mainwrapper: {
    display: "flex",
    flexDirection: "column",
    height: height,
  },
});
export default Homescreen;
