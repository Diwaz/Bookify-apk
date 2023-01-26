import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import ImageHeaderScrollView, {
  TriggeringView,
} from "react-native-image-header-scroll-view";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CategoryDisplay, InstitutionDisplay } from "../components";

const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 120;
const MAX_HEIGHT = 350;

const OfferScreen = ({ route }) => {
  const navigation = useNavigation();
  let [showTitle, setShowTitle] = useState(false);
  const navTitleView = useRef(null);

  return (
    <View style={styles.container}>
      <ImageHeaderScrollView
        maxHeight={300}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image
            source={require("../assets/Cover/cover7.jpg")}
            style={styles.image}
          />
        )}
        renderFixedForeground={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Homescreen")}>
              <View style={styles.backBtn}>
                <Ionicons name="chevron-back-outline" color="white" size={25} />
              </View>
            </TouchableOpacity>
            <Animatable.View style={styles.navTitleView} ref={navTitleView}>
              {showTitle && <Text style={styles.navTitle}>Institutions</Text>}
            </Animatable.View>
          </View>
        )}
      >
        <View style={{ height: 1000 }}>
          <TriggeringView
            onBeginHidden={() => {
              setShowTitle(true);
              navTitleView.current.fadeInUp(200);
              console.log(showTitle, "up here");
            }}
            onDisplay={() => {
              setShowTitle(false);
              navTitleView.current.fadeOut(100);
              console.log("thiiii", showTitle);
            }}
          >
            <InstitutionDisplay sectionName="Institutions" />
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 30,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  backBtn: {
    zIndex: 2,
    position: "relative",
    top: 50,

    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "transparent",
    fontFamily: "RudaB",
  },
});
