import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { COLORS, FONTS } from "../../constants/style/theme";

const InstituteBoard = () => {
  return (
    <View style={styles.instituteContainer}>
      <View style={styles.instituteHeader}></View>
    </View>
  );
};

export default InstituteBoard;

const styles = StyleSheet.create({
  instituteContainer: {
    display: "flex",
    height: verticalScale(250),
    backgroundColor: COLORS.primary,
  },
  instituteHeader: {},
});
