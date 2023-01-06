import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  Platform,
  Button,
} from "react-native";
import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
//   withTiming,
//   Easing,
// } from "react-native-reanimated";

import SearchBook from "./searchheader";
import { DrawerC, Cart, Search, Logo, Profile } from "./headerComp";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Header = () => {
  //Animation Config
  // const [focused, setFocused] = useState(false);
  // const offset = useSharedValue(0);
  // const motai = useSharedValue(100);
  // const translate_y = useSharedValue(0);
  // const translate_x = useSharedValue(0);

  // const anyflyer = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateY: translate_y.value,
  //       },
  //     ],
  //   };
  // });
  // const replaceHeader = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: translate_x.value,
  //       },
  //     ],
  //   };
  // });
  // const onFocus = () => {
  //   setFocused(true);
  //   translate_y.value = withTiming(0, {
  //     duration: 100,
  //     easing: Easing.out(Easing.exp),
  //   });
  //   translate_x.value = withTiming(-width, {
  //     duration: 100,
  //     easing: Easing.out(Easing.exp),
  //   });
  // };
  // const onBlur = () => {
  //   translate_y.value = withTiming(height, {
  //     duration: 100,
  //     easing: Easing.out(Easing.exp),
  //   });
  //   translate_x.value = withTiming(width, {
  //     duration: 100,
  //     easing: Easing.out(Easing.exp),
  //   });
  //   setFocused(false);
  // };

  //navigation config
  const navigation = useNavigation();

  const [search, setSearch] = useState("");
  return (
    <View style={style.header}>
      <DrawerC />
      <Logo />
      <TouchableOpacity
        style={{ flex: 1, display: "flex", alignItems: "center" }}

        //onPress={onFocus}
      >
        <Text>
          <Ionicons
            name="search-outline"
            style={style.search}
            size={24}
            color={"#1C2363"}
          />
        </Text>
      </TouchableOpacity>

      <Cart />
      <Profile />

      {/* {focused && (
        <View style={style.animatingLayer}>
          <Animated.View style={[style.flyingHeader, replaceHeader]}>
            <View style={style.AHeader}>
              <View
                style={{
                  margin: 15,
                }}
              >
                <TouchableOpacity onPress={onBlur}>
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
          </Animated.View>

          <Animated.View style={[style.flyer, anyflyer]}>
            <SearchBook params={search} />
          </Animated.View>
        </View>
      )} */}
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    display: "flex",

    zIndex: 999,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    marginTop: 25,
  },

  search: {
    padding: 3,
    width: 35,
    height: 32,
    //borderRadius:4,
    fontSize: 23,
    color: "#666666",
    //borderColor: '#E2E2E2',
    // borderWidth: 2
  },

  flyingHeader: {
    position: "absolute",
    top: -5,
    width: width,
    left: width,
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

export default Header;
