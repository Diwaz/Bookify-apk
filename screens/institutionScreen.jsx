import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { CollegeModal, Dashboard, Header } from "../components";
import InfoModal from "../components/infoModal";
import UpperComponent from "../components/UpperComponent";
import MidComponent from "../components/midComponent";
import BottomComponent from "../components/bottomComponent";
import { useSelector } from "react-redux";
import actions from "../redux/actions";
import { InstituteBoard } from "../components/InstituteComponent";
import { ScrollViewComp } from "../components";
import ImageHeaderScrollView, {
  TriggeringView,
} from "react-native-image-header-scroll-view";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BooksDisplay } from "../components";

const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 120;
const MAX_HEIGHT = 350;

const InstitutionScreen = ({ route }) => {
  const { collegeName, bookImg, id, address } = route.params;
  console.log("Institute Id", id);
  const [isLoading, setIsLoading] = useState(true);
  const [deptData, setDeptData] = useState({});
  const appHit = async () => {
    const res = await actions.auth.getContactById(id);
    console.log("api res institute Contact us==<<<<", res.data);
    setIsLoading(false);
    setDeptData(res.data);
  };
  useEffect(() => {
    appHit();
  }, []);
  let [showTitle, setShowTitle] = useState(false);
  const navTitleView = useRef(null);
  const navigation = useNavigation();
  const cartData = useSelector((state) => state.workflow.cartData);
  if (!deptData) {
    return (
      <View style={styles.container}>
        <ImageHeaderScrollView
          maxHeight={300}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          renderHeader={() => (
            <Image
              source={{
                uri: `https://shineducation.com${bookImg}`,
              }}
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
              <TouchableOpacity
                onPress={() => navigation.navigate("Homescreen")}
              >
                <View style={styles.backBtn}>
                  <Ionicons
                    name="chevron-back-outline"
                    color="white"
                    size={25}
                  />
                </View>
              </TouchableOpacity>
              <Animatable.View style={styles.navTitleView} ref={navTitleView}>
                {showTitle && (
                  <Text style={styles.navTitle}>{collegeName}</Text>
                )}
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
              <CollegeModal
                departmentData={id}
                collegeName={collegeName}
                address={address}
              />
            </TriggeringView>
          </View>
        </ImageHeaderScrollView>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <UpperComponent>
        <Header />
      </UpperComponent>
      <MidComponent>
        {!isLoading ? (
          <InstituteBoard
            id={id}
            collegeName={collegeName}
            collegeImg={bookImg}
            address={deptData.address}
          />
        ) : (
          /* <Dashboard
          details
          //Always USE this displayP otherwise the app will crash
          displayP={"flex"}
          CollegeInfo
          id={id}
          collegeName={collegeName}
          bookImg={bookImg}
          address={address}
        /> */
          <ActivityIndicator />
        )}
      </MidComponent>
      <BottomComponent>
        <CollegeModal departmentData={id} />
      </BottomComponent>
    </SafeAreaView>
  );
};

export default InstitutionScreen;
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
    top: 15,

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
