import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import actions from "../../redux/actions";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const ContactUs = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [deptData, setDeptData] = useState({});
  const appHit = async () => {
    const res = await actions.auth.getContactById(data);
    console.log("api res institute Contact us==<<<<", res.data);
    setIsLoading(false);
    setDeptData(res.data);
  };
  useEffect(() => {
    appHit();
  }, []);
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
          Contact Us
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.optionModal}>
          <View style={styles.rowComp}>
            <View style={styles.boxModal}>
              <Text style={styles.qn}>Email</Text>
              <Text style={[styles.answer, styles.smallFont]}>
                {deptData.email}
              </Text>
            </View>
            <View>
              <View style={styles.boxModal}>
                <Text style={styles.qn}>Address</Text>
                <Text style={styles.answer}>{deptData.address}</Text>
              </View>
            </View>
          </View>
          <View style={styles.rowComp}>
            <View style={styles.boxModal}>
              <Text style={styles.qn}>Phone</Text>
              <Text style={styles.answer}>{deptData.phone}</Text>
            </View>
            <View>
              <View style={styles.boxModal}>
                <Text style={styles.qn}>Website</Text>
                <Text style={styles.answer}>{deptData.website}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ContactUs;

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
  smallFont: {
    fontSize: 12,
  },
});
