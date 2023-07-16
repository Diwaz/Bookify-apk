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
import Collapsible from "react-native-collapsible";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import React, { useState, useEffect } from "react";
import actions from "../../redux/actions";
import Ionicons from "@expo/vector-icons/Ionicons";
import DeptContainer from "./deptContainer";
import { SIZES, COLORS, FONTS } from "../../constants/style/theme";

const { width } = Dimensions.get("window");
const Department = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [deptData, setDeptData] = useState({});
  const [deptCol, setDeptCol] = useState(true);
  const appHit = async () => {
    const res = await actions.auth.getInfoById(data);
    console.log("api res institute department==<<<<", res.data);
    setIsLoading(false);
    setDeptData(res.data);
  };
  useEffect(() => {
    appHit();
  }, []);

  const renderItem = ({ item }) => {
    const nwords = item.course.split(" ");
    const words = nwords.slice(0, 5);
    console.log(words);
    const ButtonAlert = () =>
      Alert.alert(` About:`, `${item.about}`, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    return (
      <View style={styles.modalWrapper}>
        {/* <TouchableOpacity
          onPress={() => {
            setDeptCol(!deptCol);
          }}
          style={
            {
              // backgroundColor: "blue",
            }
          }
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
          </View>
          <Collapsible collapsed={deptCol}>
            <DeptContainer msg={item.about} />
          </Collapsible>
        </TouchableOpacity> */}
        <View style={styles.modal}>
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
              <Text style={FONTS.h3}>{item.name}</Text>
            </View>
            <Collapsible collapsed={deptCol}>
              <DeptContainer
                msg={item.about}
                source={{ uri: `https://shineducation.com${item.image}` }}
                words={words}
              />
            </Collapsible>
          </TouchableOpacity>
          {/* <View>
            <Image
              source={{ uri: `https://shineducation.com${item.image}` }}
              style={styles.image}
            />
          </View> */}
          {/* <View
            style={{
              // backgroundColor: "blue",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.titleFont}>{item.name}</Text>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              {words.map((word, index) => (
                <Text key={index} style={styles.word}>
                  {word}
                </Text>
              ))}
            </View>
          </View> */}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.bottomComponent}>
      <View style={styles.descriptionModal}>
        {/* <Text
          style={{
            fontFamily: "RudaR",
            color: "#666666",
            fontSize: 25,
            marginVertical: 10,
          }}
        >
          Department
        </Text> */}
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

export default Department;

const styles = StyleSheet.create({
  bottomComponent: {
    borderRadius: 4,
    width: width,

    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#FFFFFF",
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowRadius: 6,
    // shadowOpacity: 0.8,
    // elevation: 7,
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
    width: width * 0.8,
    flexDirection: "column-reverse",
  },
  modal: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
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
  section: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "red",
    width: SIZES.width * 0.9,
    padding: moderateScale(10),
    alignItems: "center",
  },
});
