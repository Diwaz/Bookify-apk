import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONTS, SIZES } from "../../constants/style/theme";
import { moderateScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");
const sliderWidth = width - 50;
const instituteMenu = [
  {
    id: 1,
    option: "Department",
  },
  {
    id: 2,
    option: "Events",
  },
  {
    id: 3,
    option: "Teams",
  },
  {
    id: 4,
    option: "About Us",
  },
  {
    id: 5,
    option: "Notices",
  },
  {
    id: 6,
    option: "Contact Us",
  },
];
const renderMenu = ({ item }) => {
  return (
    <View style={styles.menuWrapper}>
      <Text style={[styles.menuFont, FONTS.h1]}>{item.option}</Text>
    </View>
  );
};
const InfoHeader = ({
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  slideX,
  header2Press,
  header1Press,
  header3Press,
  h1icon,
  h2icon,
  h3icon,
  h4icon,
  h5icon,
  h6icon,
}) => {
  return (
    <View style={styles.topComponent}>
      <View style={styles.titleBar}>
        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={instituteMenu}
          renderItem={renderMenu}
        /> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
          <TouchableWithoutFeedback
            onPress={header3Press}
            style={styles.headerText}
          >
            <View style={styles.headerText}>
              <Text style={styles.modelFont}>{Header4}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={header3Press}
            style={styles.headerText}
          >
            <View style={styles.headerText}>
              <Text style={styles.modelFont}>{Header5}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={header3Press}
            style={styles.headerText}
          >
            <View style={styles.headerText}>
              <Text style={styles.modelFont}>{Header6}</Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
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
    // backgroundColor: "#1C23631A",
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
    fontSize: 10,
  },
  sliderBar: {
    width: sliderWidth,
    // backgroundColor: "black",
  },
  Slider: {
    width: sliderWidth / 6,
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

    width: sliderWidth / 6,
  },
  menuWrapper: {
    marginHorizontal: moderateScale(10),
    borderColor: COLORS.primary,
    borderWidth: 1,

    paddingHorizontal: moderateScale(10),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(5),
  },
});
