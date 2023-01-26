import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";

let currentIndex = 0;
const childCount = 3;
const ContainerWidth = 400;
const childrenHeight = 200;
const reqMargin = (ContainerWidth - childrenHeight) / 7;

const { width, height } = Dimensions.get("window");
const WelcomeBoard = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [modelHeight, setmodelHeight] = useState(0);
  const [autoplay, setAutoPlay] = useState(true);
  var timerId;

  const SCROLLVIEW_REF = useRef("");
  useEffect(() => {
    if (autoplay) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
  }, [modelHeight]);
  const startAutoPlay = () => {
    timerId = setInterval(gotoNextPage, 2000);
  };
  const stopAutoPlay = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };
  const gotoNextPage = () => {
    stopAutoPlay();

    let nextIndex = (currentIndex + 1) % childCount;
    {
      // userData.data &&
      SCROLLVIEW_REF.current.scrollTo({ x: modelHeight * nextIndex });
    }
  };
  const onScrollViewLayout = (event) => {
    let { width } = event.nativeEvent.layout;
    setmodelHeight(width);
  };
  const onScrollX = (event) => {
    let { x } = event.nativeEvent.contentOffset,
      offset,
      preScrollX = 0,
      position = Math.floor(x / modelHeight);
    if (x === preScrollX) return;
    preScrollX = x;

    offset = x / modelHeight - position;

    if (offset === 0) {
      currentIndex = position;
      timerId = setInterval(gotoNextPage, 2000);
    }
  };
  return (
    <View style={{ flex: 1, height: 260 }}>
      <ScrollView
        style={{ flex: 1 }}
        pagingEnabled
        ref={SCROLLVIEW_REF}
        horizontal
        onLayout={onScrollViewLayout}
        onScroll={onScrollX}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={8}
      >
        <View style={[styles.carsoulContainer, {}]}>
          <Image
            source={require("../assets/cover1.jpg")}
            style={{ width: width, height: 200 }}
          />
        </View>
        <View style={[styles.carsoulContainer, { backgroundColor: "yellow" }]}>
          <Image
            source={require("../assets/cover2.jpg")}
            style={{ width: width, height: 200 }}
          />
        </View>
        <View style={[styles.carsoulContainer, { backgroundColor: "red" }]}>
          <Image
            source={require("../assets/cover3.jpg")}
            style={{ width: width, height: 200 }}
          />
        </View>
        {/* <View
          style={[styles.carsoulContainer, { backgroundColor: "black" }]}
        ></View>
        <View style={styles.carsoulContainer}></View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carsoulContainer: {
    width: width,
    height: 200,
    // backgroundColor: "red",
    //margin: reqMargin,
    borderRadius: 10,
  },
});

export default WelcomeBoard;
