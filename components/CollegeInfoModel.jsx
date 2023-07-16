import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  Department,
  Events,
  InfoHeader,
  Teams,
  AboutUs,
  Notices,
  ContactUs,
} from "./InfoModalComp";
import Collapsible from "react-native-collapsible";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONTS, SIZES } from "../constants/style/theme";

const { width } = Dimensions.get("window");

const CollegeModal = ({ departmentData }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();
  const [deptCol, setDeptCol] = useState(true);
  const [eventCol, setEventCol] = useState(true);
  const [teamCol, setTeamCol] = useState(true);
  const [aboutCol, setAboutCol] = useState(true);
  const [noticeCol, setNoticeCol] = useState(true);
  const [contactCol, setContactCol] = useState(true);
  const sliderOffset = (width - 50) / 6;
  const lastPage = 5 * width;
  const sliderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, sliderOffset],
  });

  return (
    <View style={styles.infowrapper}>
      <InfoHeader
        Header1="Department"
        header1Press={() => scrollView.current.scrollTo({ x: 0 })}
        header2Press={() => scrollView.current.scrollTo({ x: width })}
        header3Press={() => scrollView.current.scrollTo({ x: 2 * width })}
        header4Press={() => scrollView.current.scrollTo({ x: 3 * width })}
        header5Press={() => scrollView.current.scrollTo({ x: 4 * width })}
        header6Press={() => scrollView.current.scrollTo({ x: lastPage })}
        Header2="Events"
        Header3="Teams"
        Header4="AboutUs"
        Header5="Notices"
        Header6="ContactUs"
        h1icon={"grid-outline"}
        h2icon={"megaphone-outline"}
        h3icon={"people-outline"}
        h4icon={"call-outline"}
        h5icon={"mail-unread-outline"}
        h6icon={"at-outline"}
        slideX={sliderTranslateX}
      />
      <ScrollView
        ref={scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{}}
      >
        {/* <View style={styles.accordWrapper}>
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
            }}
            onPress={() => {
              setDeptCol(!deptCol);
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  marginRight: moderateScale(5),
                }}
              >
                <Ionicons
                  name={`chevron-${deptCol ? "forward" : "down"}-outline`}
                  size={scale(15)}
                  color={COLORS.black}
                />
              </Text>
              <Text style={FONTS.h3}>Department</Text>
            </View>
            <Collapsible collapsed={deptCol}>
              <Department data={departmentData} />
            </Collapsible>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
            }}
            onPress={() => {
              setEventCol(!eventCol);
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  marginRight: moderateScale(5),
                }}
              >
                <Ionicons
                  name={`chevron-${eventCol ? "forward" : "down"}-outline`}
                  size={scale(15)}
                  color={COLORS.black}
                />
              </Text>
              <Text style={FONTS.h3}>Events</Text>
            </View>
            <Collapsible collapsed={eventCol}>
              <Events data2={departmentData} />
            </Collapsible>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
            }}
            onPress={() => {
              setTeamCol(!teamCol);
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  marginRight: moderateScale(5),
                }}
              >
                <Ionicons
                  name={`chevron-${teamCol ? "forward" : "down"}-outline`}
                  size={scale(15)}
                  color={COLORS.black}
                />
              </Text>
              <Text style={FONTS.h3}>Teams</Text>
            </View>
            <Collapsible collapsed={teamCol}>
              <Teams data={departmentData} />
            </Collapsible>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
            }}
            onPress={() => {
              setAboutCol(!aboutCol);
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  marginRight: moderateScale(5),
                }}
              >
                <Ionicons
                  name={`chevron-${aboutCol ? "forward" : "down"}-outline`}
                  size={scale(15)}
                  color={COLORS.black}
                />
              </Text>
              <Text style={FONTS.h3}>About Us</Text>
            </View>
            <Collapsible collapsed={aboutCol}>
              <AboutUs data={departmentData} />
            </Collapsible>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
            }}
            onPress={() => {
              setNoticeCol(!noticeCol);
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  marginRight: moderateScale(5),
                }}
              >
                <Ionicons
                  name={`chevron-${noticeCol ? "forward" : "down"}-outline`}
                  size={scale(15)}
                  color={COLORS.black}
                />
              </Text>
              <Text style={FONTS.h3}>Notices</Text>
            </View>
            <Collapsible collapsed={noticeCol}>
              <Notices data={departmentData} />
            </Collapsible>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
            }}
            onPress={() => {
              setContactCol(!contactCol);
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  marginRight: moderateScale(5),
                }}
              >
                <Ionicons
                  name={`chevron-${contactCol ? "forward" : "down"}-outline`}
                  size={scale(15)}
                  color={COLORS.black}
                />
              </Text>
              <Text style={FONTS.h3}>Contact Us</Text>
            </View>
            <Collapsible collapsed={contactCol}>
              <ContactUs data={departmentData} />
            </Collapsible>
          </TouchableOpacity>
        </View> */}
        <Department data={departmentData} />
        <Events data2={departmentData} />
        <Teams data={departmentData} />
        <AboutUs data={departmentData} />
        <Notices data={departmentData} />
        <ContactUs data={departmentData} />
      </ScrollView>
    </View>
  );
};

export default CollegeModal;

const styles = StyleSheet.create({
  infowrapper: {
    display: "flex",
    marginTop: 350,
    height: verticalScale(SIZES.height * 0.4),
    alignItems: "center",
    // backgroundColor: "red",
    justifyContent: "center",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "red",
    width: SIZES.width * 0.9,
    padding: moderateScale(10),
    alignItems: "center",
  },
});
