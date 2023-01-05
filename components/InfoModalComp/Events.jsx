import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const Events = () => {
  return (
    <View style={styles.bottomComponent}>
      <View style={styles.descriptionModal}>
        <Text
          style={{
            fontFamily: "RudaR",
            color: "#666666",
            fontSize: 11,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          quia impedit unde earum ducimus dolorum?...
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "RudaB",
                color: "#1C2363",
                fontSize: 11,
              }}
            >
              {" "}
              See More
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.optionModal}>
        <View style={styles.rowComp}>
          <View style={styles.boxModal}>
            <Text style={styles.qn}>Address</Text>
            <Text style={styles.answer}>Lagankhel,Lalitpur</Text>
          </View>
          <View>
            <View style={styles.boxModal}>
              <Text style={styles.qn}>Phone Number</Text>
              <Text style={styles.answer}>01-532414</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowComp}>
          <View style={styles.boxModal}>
            <Text style={styles.qn}>Email</Text>
            <Text style={styles.answer}>reception@sxc.com</Text>
          </View>
          <View>
            <View style={styles.boxModal}>
              <Text style={styles.qn}>Website</Text>
              <Text style={styles.answer}>www.sxc.com</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Events;

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
});
