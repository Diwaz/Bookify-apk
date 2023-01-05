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
import { Department, Events, InfoHeader, Teams } from "./InfoModalComp";

const { width } = Dimensions.get("window");

const CollegeModal = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const sliderOffset = (width - 50) / 3;
  const lastPage = 2 * width;
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
        header3Press={() => scrollView.current.scrollTo({ x: lastPage })}
        Header2="Events"
        Header3="Teams"
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
        <Department />
        <Events />
        <Teams />
      </ScrollView>
    </View>
  );
};

export default CollegeModal;

const styles = StyleSheet.create({
  infowrapper: {
    display: "flex",

    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
});
