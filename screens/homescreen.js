import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dashboard, Header, List } from "../components";
import { WelcomeBoard } from "../components";
import UpperComponent from "../components/UpperComponent";
import MidComponent from "../components/midComponent";
import BottomComponent from "../components/bottomComponent";
import actions from "../redux/actions";

const { width, height } = Dimensions.get("window");
const Homescreen = ({ navigation }) => {
  const dashData = {
    title: "Find all books at bookify",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in dolorem tempore, quae laboriosam distinctio.",
  };
  const [isLoading, setIsLoading] = useState(true);

  const [loaded] = useFonts({
    RudaR: require("../assets/fonts/Ruda-Regular.ttf"),
    RudaB: require("../assets/fonts/Ruda-Bold.ttf"),
  });

  const appHit = async () => {
    //const purchasedBooks = getPurchasedData();
    const booksData = await actions.auth.getBooks();
    const collegeData = await actions.auth.getCollege();
    actions.workflow.setBookData(booksData.data);
    actions.workflow.setCollegeData(collegeData.data);
    //actions.workflow.setDownload(purchasedBooks);
    setIsLoading(false);
  };
  useEffect(() => {
    appHit();
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={style.mainwrapper}>
      <UpperComponent>
        <Header />
      </UpperComponent>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: height + 100 }}
      >
        <MidComponent>
          {/* <Dashboard
          btn
          title={dashData.title}
          description={dashData.description}
          Info
          bell
          welcome
          //Always USE this DisplayP otherwise the app will crash
          displayP={"flex"}
        /> */}
          <WelcomeBoard />
        </MidComponent>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <BottomComponent>
            <List college title="Top Rated Institute" />
            <List category title="Top Category" />

            <List book title="Top Rated Books" />
          </BottomComponent>
        )}
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Homescreen;

const style = StyleSheet.create({
  mainwrapper: {
    display: "flex",
    flexDirection: "column",
    height: height,
  },
});
