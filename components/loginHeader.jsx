import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
const LoginHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      {/* <View style={styles.circleComp}>
    </View> */}
      <View style={styles.logoManager}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 40,
              fontFamily: "RudaB",
            }}
          >
            Shine Education
          </Text>
          <Text
            style={{
              color: "#FFFFFF99",
              fontSize: 25,
              fontFamily: "RudaR",
            }}
          >
            V0.1
          </Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/Cover/book.png")}
            style={styles.LogoHeader}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.6,
    position: "relative",
    width: width,
  },
  circleComp: {
    position: "absolute",
    top: -height * 0.38, //0/28

    width: width * 1.5, //'150%',
    height: height * 0.8, //'60%',
    backgroundColor: "#1C2363",
    borderRadius: width,
    borderWidth: 10,
    borderColor: "#009343",
  },
  LogoHeader: {
    width: 150,
    height: 150,
  },
  imageWrapper: {
    top: 50,
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logoManager: {
    position: "absolute",
    top: 70,
    height: height * 0.35, //'35%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});
