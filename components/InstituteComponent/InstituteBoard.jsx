import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { COLORS, FONTS, SIZES } from "../../constants/style/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
const InstituteBoard = ({ collegeName, collegeImg, address, rating }) => {
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
  return (
    <View style={styles.instituteContainer}>
      <View style={styles.instituteHeader}>
        <View style={styles.instituteLogo}>
          <View>
            <Image
              source={{
                uri: `https://shineducation.com${collegeImg}`,
              }}
              style={{
                width: SIZES.width * 0.9,
                height: 130,
                borderColor: COLORS.checkmark,
                borderWidth: moderateScale(1),
                borderRadius: moderateScale(4),
              }}
            />
            {/* <View
              style={{
                backgroundColor: "lightgreen",
                width: 15,
                height: 15,
                position: "absolute",
                right: -7,
                borderRadius: 10,
                bottom: 5,
              }}
            ></View> */}
          </View>
          <Text
            style={[
              collegeName.length > 30 ? FONTS.h2 : FONTS.h1,
              {
                marginTop: moderateScale(10),
                // backgroundColor: "blue",
                paddingHorizontal: 10,
              },
            ]}
          >
            {collegeName}

            <Ionicons
              name={"shield-checkmark"}
              size={scale(10)}
              color={COLORS.checkmark}
              style={{
                position: "absolute",
                top: 10,
                //  backgroundColor: "red",
                padding: 10,
              }}
            />
          </Text>
          <Text
            style={[
              FONTS.h2,
              {
                color: COLORS.addressFont,
              },
            ]}
          >
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
              size={scale(15)}
              color={COLORS.orange}
            />
            <Ionicons
              name={`star${rating > 1 ? "" : "-outline"}`}
              size={scale(15)}
              color={COLORS.orange}
            />
            <Ionicons
              name={`star${rating > 2 ? "" : "-outline"}`}
              size={scale(15)}
              color={COLORS.orange}
            />
            <Ionicons
              name={`star${rating > 3 ? "" : "-outline"}`}
              size={scale(15)}
              color={COLORS.orange}
            />
            <Ionicons
              name={`star${rating > 4 ? "" : "-outline"}`}
              size={scale(15)}
              color={COLORS.orange}
            />
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={styles.applyBtn}>
              <Text
                style={[
                  FONTS.h2,
                  {
                    color: "white",
                  },
                ]}
              >
                Apply Now
              </Text>

              <Ionicons
                name="paper-plane-outline"
                size={scale(10)}
                color={COLORS.white}
              />
            </View>
            <View
              style={[
                FONTS.h2,
                styles.applyBtn,
                {
                  backgroundColor: COLORS.primary,
                },
              ]}
            >
              <Text
                style={[
                  FONTS.h2,
                  {
                    color: "white",
                  },
                ]}
              >
                Share
              </Text>

              <Ionicons
                name="share-social-outline"
                size={scale(10)}
                color={COLORS.white}
              />
            </View>
          </View>
          {/* <View style={styles.flatListWrapper}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={instituteMenu}
              renderItem={renderMenu}
            />
          </View> */}
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
    // backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  instituteHeader: {
    display: "flex",
    height: verticalScale(250),
    width: moderateScale(SIZES.width * 0.9, 0.1),
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.body4,
    // borderBottomRightRadius: 0,
    // borderBottomLeftRadius: 0,
    borderColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 7,
  },
  instituteLogo: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
  },
  applyBtn: {
    backgroundColor: COLORS.checkmark,
    width: 100,
    marginRight: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: scale(4),
    marginTop: verticalScale(10),
  },
  menuWrapper: {
    // marginHorizontal: moderateScale(10),
    borderColor: COLORS.grey,
    borderWidth: 1,

    paddingHorizontal: moderateScale(10),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 0,

    // borderRadius: SIZES.body4,
  },
  flatListWrapper: {
    height: verticalScale(30),
    marginTop: verticalScale(15),
    position: "relative",
  },
});
