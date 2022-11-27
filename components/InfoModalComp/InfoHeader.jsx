import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InfoHeader = ({ Header1, Header2, Header3 }) => {
  return (
    <View style={styles.topComponent}>
      <View style={styles.titleBar}>
        <View>
          <Text style={styles.modelFont}>{Header1}</Text>
        </View>
        <View>
          <Text style={styles.modelFont}>{Header2}</Text>
        </View>
        <View>
          <Text style={styles.modelFont}>{Header3}</Text>
        </View>
      </View>
      <View style={styles.sliderBar}></View>
    </View>
  );
};

export default InfoHeader;

const styles = StyleSheet.create({
  topComponent: {
    width: 373,
    height: 57,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1C23631A",
    marginBottom: 7,
    flexDirection: "column",
    paddingTop: 20,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 370,
  },
  modelFont: {
    fontFamily: "RudaR",
    color: "#1C2363",
  },
  sliderBar: {
    width: 50,
    backgroundColor: "#1C2363",
    height: 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
