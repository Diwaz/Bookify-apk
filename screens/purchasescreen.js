import { Header } from "../components";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import * as FileSystem from "expo-file-system";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const pdfUrl = "http://samples.leanpub.com/thereactnativebook-sample.pdf";

const PurchaseScreen = ({ sectionName }) => {
  const [downloaded, setDownloaded] = useState(false);
  const navigation = useNavigation();
  const [pdfUri, setPdfUri] = useState("");

  const downloadPdf = async () => {
    try {
      console.log("downloadStarted", pdfUrl);
      // Download the PDF file and save it to the device
      const downloadResult = await FileSystem.downloadAsync(
        pdfUrl,
        FileSystem.documentDirectory + "book1.pdf"
      );
      console.log(downloadResult);
      setPdfUri(downloadResult.uri);
      setDownloaded(true);
      console.log(pdfUri);
      // return downloadResult.uri;
    } catch (error) {
      console.error(error);
    }
  };

  const bookData = [
    {
      id: 1,
      bookName: "Data Structure & Algorithms",
      image: require("../assets/Cover/cover1.jpeg"),
      author: "Hari Bdr Neupane",
      views: 4567,
      upDate: "7 days",
      price: 675,
    },
    {
      id: 2,
      bookName: "The King of Drugs",
      image: require("../assets/Cover/cover2.jpg"),
      author: "Nora Barret",
      views: 567,
      upDate: "1 day",
      price: 1000,
    },
    {
      id: 3,
      bookName: "Creative Business",
      image: require("../assets/Cover/cover3.jpg"),
      author: "Allan Watts",
      views: 64567,
      upDate: "3 months",
      price: 6750,
    },
    {
      id: 4,
      bookName: "Creative Ideas",
      image: require("../assets/Cover/cover4.jpg"),
      author: "Andrew Schulz",
      views: 40567,
      upDate: "7 days",
      price: 300,
    },
    {
      id: 5,
      bookName: "Creative Brain",
      image: require("../assets/Cover/cover5.jpg"),
      author: "George R. R. Martin",
      views: 91345,
      upDate: "21 days",
      price: 2000,
    },
  ];

  const renderBooks = ({ item }) => (
    <View style={styles.itemWrapper}>
      {/* <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View> */}
      <View style={styles.imageWrapper}>
        <Image source={`${item.image}`} style={styles.image} />
      </View>
      <View style={styles.infowrapper}>
        <Text
          style={{
            fontFamily: "RudaR",
            color: "#1C2363",
            fontSize: 16,
          }}
        >
          {item.bookName}
        </Text>
        <Text
          style={{
            fontFamily: "RudaR",
            fontSize: 10,
          }}
        >
          {item.author}
        </Text>
      </View>
      <View style={styles.controlWrapper}>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("PdfViewer");
          }}
        >
          <View style={styles.controlLayout}>
            <Text
              style={{
                fontFamily: "RudaB",
                color: "white",
              }}
            >
              Open
            </Text>
          </View>
        </TouchableOpacity>
        {!downloaded && (
          <TouchableOpacity onPress={downloadPdf}>
            <View style={styles.controlLayout2}>
              <Text
                style={{
                  fontFamily: "RudaB",
                  color: "white",
                }}
              >
                Download
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
  return (
    <View>
      <View>
        <Header />
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={bookData}
        renderItem={renderBooks}
      />
    </View>
  );
};

export default PurchaseScreen;

const styles = StyleSheet.create({
  itemWrapper: {
    width: width * 0.98,
    // backgroundColor: "#e2e2e2",
    borderBottomColor: "#989898",
    // borderBottomWidth: 1,
    height: height * 0.1,
    margin: 4,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: width * 0.08,
    height: height * 0.08,
  },
  imageWrapper: {
    flex: 1,
  },
  infowrapper: {
    flex: 2,
    justifyContent: "space-between",
  },
  controlWrapper: {
    flex: 1,
  },
  controlLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#009343",
    borderRadius: 10,
    height: 30,
  },
  controlLayout2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#009343",
    borderRadius: 10,
    height: 30,
    marginTop: 5,
  },
});
