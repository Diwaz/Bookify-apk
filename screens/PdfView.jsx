import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  FlatList,
} from "react-native";

import React, { useEffect, useState } from "react";
import { AppState } from "react-native";

// import Pdf from "react-native-pdf";

export default function PdfViewer({ navigation }) {
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (appState.match(/inactive|background/) && nextAppState === "active") {
        console.log("App has come to the foreground!");
      } else if (nextAppState === "background") {
        console.log("App has been minimized!");
      }
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const [appState, setAppState] = useState(AppState.currentState);
  const [selectedId, setSelectedId] = useState(null);

  const source = {
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    cache: true,
  };

  return (
    <View style={styles.container}>
      <View style={styles.pdfHeader}></View>
      {/* <Pdf
        trustAllCerts={false}
        enablePaging={true}
        source={source}
        horizontal={true}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  pdfHeader: {
    backgroundColor: "red",
  },
});
