import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Image,
  Alert,
} from "react-native";
import actions from "../../redux/actions";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const Notices = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [deptData, setDeptData] = useState({});
  const appHit = async () => {
    const res = await actions.auth.getNoticeById(data);
    console.log("api res institute NOTICES==<<<<", res.data);
    setIsLoading(false);
    setDeptData(res.data);
  };
  useEffect(() => {
    appHit();
  }, []);

  const renderItem = ({ item }) => {
    const ButtonAlert = () =>
      Alert.alert(` Description:`, `${item.description}`, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    return (
      <View style={styles.modalWrapper}>
        <View style={styles.modal}>
          <View>
            <Image
              source={{ uri: `https://shineducation.com${item.images}` }}
              style={styles.image}
            />
          </View>
          <View>
            <View>
              <Text style={styles.titleFont}>{item.title}</Text>
            </View>
            {/* <View style={{ flexDirection: "row", margin: 10 }}>
              {words.map((word, index) => (
                <Text key={index} style={styles.word}>
                  {word}
                </Text>
              ))}
            </View> */}
          </View>
          <TouchableOpacity onPress={ButtonAlert}>
            <Ionicons name="alert-circle-outline" size={24} color={"#1C2363"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
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
          Notices
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={deptData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

export default Notices;

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
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  modalWrapper: {
    backgroundColor: "#1C23631A",
    padding: 5,
    margin: 5,
    borderRadius: 10,
    width: width * 0.9,
  },
  modal: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
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
