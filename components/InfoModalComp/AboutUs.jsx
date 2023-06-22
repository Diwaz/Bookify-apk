import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import actions from "../../redux/actions";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const AboutUs = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [deptData, setDeptData] = useState(null);
  const appHit = async () => {
    const res = await actions.auth.getAboutById(data);
    console.log("api res institute about us==<<<<", res.data);
    setIsLoading(false);
    setDeptData(res.data);
    console.log("dept data from hooks", deptData);
  };
  useEffect(() => {
    appHit();
  }, []);
  // const renderItem = ({ item }) => {
  //   ;
  // };
  if (!deptData) {
    return (
      <View style={styles.bottomComponent}>
        <View style={styles.descriptionModal}>
          <Text
            style={{
              fontFamily: "RudaR",
              color: "#666666",
              fontSize: 25,
              marginVertical: 10,
            }}
          >
            About Us
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.modalWrapper}>
            <View style={styles.modal}>
              <View></View>
              <View>
                <View>
                  {/* <Text style={styles.titleFont}>Introduction</Text> */}
                </View>
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti unde similique obcaecati recusandae quaerat nulla
                    labore temporibus et. Praesentium corporis eum modi
                    molestias minima error!
                  </Text>
                </View>
              </View>
            </View>
          </View>
          // <FlatList
          //   data={[deptData]}
          //   renderItem={renderItem}
          //   keyExtractor={(item) => item._id}
          // />
        )}
      </View>
    );
  }

  return (
    <View style={styles.bottomComponent}>
      <View style={styles.descriptionModal}>
        <Text
          style={{
            fontFamily: "RudaR",
            color: "#666666",
            fontSize: 25,
            marginVertical: 10,
          }}
        >
          About Us
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <View>
              <Image
                source={{
                  uri: `https://shineducation.com${deptData.images}`,
                }}
                style={styles.image}
              />
            </View>
            <View>
              <View>
                {/* <Text style={styles.titleFont}>Introduction</Text> */}
              </View>
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Text>{deptData.text}</Text>
              </View>
            </View>
          </View>
        </View>
        // <FlatList
        //   data={[deptData]}
        //   renderItem={renderItem}
        //   keyExtractor={(item) => item._id}
        // />
      )}
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  bottomComponent: {
    borderRadius: 4,
    width: width,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  modelFont: {
    fontFamily: "RudaR",
    color: "#1C2363",
  },
  rowComp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxModal: {
    backgroundColor: "#1C23631A",
    borderRadius: 4,
    padding: 5,
    width: 150,
    height: 55,
    margin: 10,
  },
  answer: {
    fontSize: 14,
    fontFamily: "RudaR",
    color: "#1C2363",
  },
  qn: {
    fontSize: 12,
    fontFamily: "RudaR",
    color: "#666666",
    marginBottom: 5,
  },
  modalWrapper: {
    backgroundColor: "#1C23631A",
    padding: 5,
    margin: 5,
    borderRadius: 10,
    width: width * 0.9,
  },
  modal: {
    padding: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  titleFont: {
    fontFamily: "RudaB",
    fontSize: 15,
  },
  word: {
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    margin: 5,
    padding: 5,
    fontSize: 10,
  },
});
