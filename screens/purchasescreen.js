import { Header, Nodownloads } from "../components";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as FileSystem from "expo-file-system";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const { height, width } = Dimensions.get("window");

const pdfUrl = "http://samples.leanpub.com/thereactnativebook-sample.pdf";

const PurchaseScreen = ({ sectionName }) => {
  const checkData = useSelector((state) => state.workflow.purchasedBooks);
  const bookData = useSelector((state) => state.workflow.initialBookData);

  const password = "thisisveryverysecurePassword0708"; // The password used to encrypt/decrypt the file
  const [downloaded, setDownloaded] = useState(false);
  const [getBook, setGetBook] = useState();
  const navigation = useNavigation();
  const [pdfUri, setPdfUri] = useState("");
  console.log("downloaded bookData", checkData);
  const dataarr = [];
  for (let i = 0; i < checkData.length; i++) {
    dataarr.push(
      bookData.find((el) => {
        return checkData[i] == el.name;
      })
    );
  }
  console.log("bookssssssss", dataarr);
  const downloadPdf = async () => {
    try {
      // // Download the PDF file
      // const pdfBuffer = await FileSystem.downloadAsync(
      //   pdfUrl,
      //   FileSystem.documentDirectory + "extra.txt",
      //   {
      //     encoding: FileSystem.EncodingType.Base64,
      //   }
      // );
      // console.log("encryption started");
      // //Encrypt the pdf buffer
      // const cipher = crypto.createCipher("aes-256-cbc", password);
      // let encryptedPdf = cipher.update(pdfBuffer, "binary", "base64");
      // encryptedPdf += cipher.final("base64");

      // // Save the encrypted pdf buffer to the device
      // const pdfPath = FileSystem.documentDirectory + "encrypted.pdf";
      // const downloadResult = await FileSystem.writeAsStringAsync(
      //   pdfPath,
      //   encryptedPdf,
      //   {
      //     encoding: FileSystem.EncodingType.Base64,
      //   }
      // );
      // const pdfLocalPath = downloadResult.uri;
      // console.log("enc pdf path", pdfLocalPath);
      console.log("Download Started");
    } catch (error) {
      console.error(error);
    }
  };

  // const bookData = [
  //   {
  //     id: 1,
  //     bookName: "Data Structure & Algorithms",
  //     image: require("../assets/Cover/cover1.jpeg"),
  //     author: "Hari Bdr Neupane",
  //     views: 4567,
  //     upDate: "7 days",
  //     price: 675,
  //   },
  //   // {
  //   //   id: 2,
  //   //   bookName: "The King of Drugs",
  //   //   image: require("../assets/Cover/cover2.jpg"),
  //   //   author: "Nora Barret",
  //   //   views: 567,
  //   //   upDate: "1 day",
  //   //   price: 1000,
  //   // },
  //   // {
  //   //   id: 3,
  //   //   bookName: "Creative Business",
  //   //   image: require("../assets/Cover/cover3.jpg"),
  //   //   author: "Allan Watts",
  //   //   views: 64567,
  //   //   upDate: "3 months",
  //   //   price: 6750,
  //   // },
  //   // {
  //   //   id: 4,
  //   //   bookName: "Creative Ideas",
  //   //   image: require("../assets/Cover/cover4.jpg"),
  //   //   author: "Andrew Schulz",
  //   //   views: 40567,
  //   //   upDate: "7 days",
  //   //   price: 300,
  //   // },
  //   // {
  //   //   id: 5,
  //   //   bookName: "Creative Brain",
  //   //   image: require("../assets/Cover/cover5.jpg"),
  //   //   author: "George R. R. Martin",
  //   //   views: 91345,
  //   //   upDate: "21 days",
  //   //   price: 2000,
  //   // },
  // ];

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
        <Image
          source={{
            uri: `https://shineducation.com${item.image}`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.infowrapper}>
        <Text
          style={{
            fontFamily: "RudaR",
            color: "#1C2363",
            fontSize: 16,
          }}
        >
          {item.name}
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
        {/* {!downloaded && (
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
        )} */}
      </View>
    </View>
  );
  return (
    <View>
      <View>
        <Header />
      </View>
      {dataarr.length > 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={dataarr}
          renderItem={renderBooks}
        />
      ) : (
        <Nodownloads />
      )}
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
