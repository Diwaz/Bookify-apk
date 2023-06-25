import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { COLORS, FONTS, SIZES } from "../../constants/style/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
const InstituteBoard = ({ collegeName, collegeImg, address, rating }) => {
  return (
    <View style={styles.instituteContainer}>
      <View style={styles.instituteHeader}>
        <View>
          <View>
            <Image
              source={{
                uri: `https://shineducation.com${collegeImg}`,
              }}
              style={{
                width: 150,
                height: 100,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 5,
              }}
            />
          </View>
          <Text style={FONTS.h1}>
            {collegeName}
            <Ionicons
              name={"shield-checkmark"}
              size={scale(12)}
              color={COLORS.checkmark}
            />
          </Text>
          <Text style={FONTS.h2}>
            <Ionicons
              name="location-outline"
              size={scale(10)}
              color={COLORS.primary}
            />
            {address}
          </Text>
          <Text>
            <Ionicons
              name={`star${rating > 0 ? "" : "-outline"}`}
              size={scale(10)}
              color={COLORS.primary}
            />
            <Ionicons
              name={`star${rating > 1 ? "" : "-outline"}`}
              size={scale(10)}
              color={COLORS.primary}
            />
            <Ionicons
              name={`star${rating > 2 ? "" : "-outline"}`}
              size={scale(10)}
              color={COLORS.primary}
            />
            <Ionicons
              name={`star${rating > 3 ? "" : "-outline"}`}
              size={scale(10)}
              color={COLORS.primary}
            />
            <Ionicons
              name={`star${rating > 4 ? "" : "-outline"}`}
              size={scale(10)}
              color={COLORS.primary}
            />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InstituteBoard;

const styles = StyleSheet.create({
  instituteContainer: {
    display: "flex",
    height: verticalScale(250),
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  instituteHeader: {
    display: "flex",
    height: verticalScale(200),
    width: moderateScale(SIZES.width * 0.9, 0.1),
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.body4,
    borderColor: COLORS.black,
  },
});
