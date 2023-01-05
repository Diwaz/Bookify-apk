import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const sliderWidth = width - 50;
const InfoHeader = ({
  Header1,
  Header2,
  Header3,
  slideX,
  header2Press,
  header1Press,
  header3Press,
}) => {
  return (
    <View style={styles.topComponent}>
      <View style={styles.titleBar}>
        <TouchableWithoutFeedback onPress={header1Press}>
          <View style={styles.headerText}>
            <Text style={styles.modelFont}>{Header1}</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={header2Press}
          style={styles.headerText}
        >
          <View style={styles.headerText}>
            <Text style={styles.modelFont}>{Header2}</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={header3Press}
          style={styles.headerText}
        >
          <View style={styles.headerText}>
            <Text style={styles.modelFont}>{Header3}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.sliderBar}>
        <Animated.View
          style={[styles.Slider, { transform: [{ translateX: slideX }] }]}
        ></Animated.View>
      </View>
    </View>
  );
};

export default InfoHeader;

const styles = StyleSheet.create({
  topComponent: {
    width: width - 20,
    height: 57,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1C23631A",
    marginBottom: 14,
    flexDirection: "column",
    paddingTop: 20,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: sliderWidth,
  },
  modelFont: {
    fontFamily: "RudaR",
    color: "#1C2363",
  },
  sliderBar: {
    width: sliderWidth,
    // backgroundColor: "black",
  },
  Slider: {
    width: sliderWidth / 3,
    backgroundColor: "#1C2363",
    height: 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: "relative",
    left: 0,
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: sliderWidth / 3,
  },
});
