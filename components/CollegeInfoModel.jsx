import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import {
  Department,
  Events,
  InfoHeader,
  Teams,
  AboutUs,
  Notices,
  ContactUs,
} from "./InfoModalComp";

const { width } = Dimensions.get("window");

const CollegeModal = ({ departmentData }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

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
    marginTop: 320,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
});
