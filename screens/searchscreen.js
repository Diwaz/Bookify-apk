import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dashboard, Header } from "../components";
import InfoModal from "../components/infoModal";
import UpperComponent from "../components/UpperComponent";
import MidComponent from "../components/midComponent";
import BottomComponent from "../components/bottomComponent";
import { useSelector } from "react-redux";
import actions from "../redux/actions";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import SearchBook from "../components/searchheader";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Searchscreen = ({ route }) => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={style.animatingLayer}>
        <View style={[style.flyingHeader]}>
          <View style={style.AHeader}>
            <View
              style={{
                margin: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Homescreen")}
              >
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color={"#1C2363"}
                />
              </TouchableOpacity>
            </View>
            <View style={style.Inputbar}>
              <TextInput
                autoFocus={true}
                placeholder="Search Books"
                clearButtonMode="always"
                style={[
                  Platform.OS === "web" && { outlineStyle: "none" },
                  style.inputbox,
                ]}
                onChangeText={(text) => setSearch(text)}
                // style={style.inputbox}
              />
              <Ionicons name="search-outline" size={20} color={"#1C2363"} />
            </View>
          </View>
        </View>

        <View style={[style.flyer]}>
          <SearchBook params={search} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  flyingHeader: {
    position: "absolute",
    top: -5,
    width: width,
    left: 0,
    zIndex: 1000,
    backgroundColor: "#f2f2f2",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
  flyer: {
    width: width,
    height: height,
    backgroundColor: "#e2e2e2",
    left: 0,
    position: "absolute",
    flex: 5,
  },
  AHeader: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    height: 67,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Inputbar: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#e2e2e2",
    borderWidth: 2,
    borderRadius: 4,
    height: 37,
    width: width * 0.8, //'90%',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  inputbox: {
    //backgroundColor:'blue',

    height: 20,
    width: 250,
  },
  animatingLayer: {
    height: height,
    width: width,
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
  },
});

export default Searchscreen;
