import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import SuccessSVG from "../assets/SVGs/success";

const { width, height } = Dimensions.get("window");
const PaymentSuccess = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#1C23631A",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={style.billWrapper}>
        <View style={style.SVGwrapper}>
          <SuccessSVG width={200} height={200} />
          <Text style={{ fontFamily: "RudaB", fontSize: 16 }}>
            Payment Success
          </Text>
        </View>
        <View style={style.detailWrapper}>
          <View style={style.rowDetail}>
            <Text style={style.attrFont}>Transaction Code</Text>
            <Text style={style.ansFont}>BOKFY-214324234</Text>
          </View>
          <View style={style.rowDetail}>
            <Text style={style.attrFont}>Date/Time</Text>
            <Text style={style.ansFont}>8 Jan 2023 , 10:10 PM</Text>
          </View>
          <View style={style.rowDetail}>
            <Text style={style.attrFont}>Status</Text>
            <View style={style.statusCSS}>
              <Text style={{ color: "white" }}>COMPLETED</Text>
            </View>
          </View>
          <View style={style.rowDetail}>
            <Text style={style.attrFont}>Amount(NPR)</Text>
            <Text style={style.ansFont}>2000</Text>
          </View>
          <View style={style.rowDetail}>
            <Text style={style.attrFont}>Service Name</Text>
            <Text style={style.ansFont}>Khalti Wallet</Text>
          </View>
          <View style={style.rowDetail}>
            <Text style={style.attrFont}>Product Name</Text>
            <Text style={style.ansFont}>Creative Ideas</Text>
          </View>
        </View>
        <View style={style.buttonWrapper}>
          <View style={style.btn1}>
            <Text style={{ color: "white", fontFamily: "RudaB", fontSize: 16 }}>
              Go To Library
            </Text>
          </View>
          <View style={style.btn2}>
            <Text style={{ color: "grey", fontFamily: "RudaB", fontSize: 16 }}>
              Go To Homepage
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  SVGwrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  billWrapper: {
    height: 0.9 * height,
    width: 0.95 * width,
    backgroundColor: "white",

    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  detailWrapper: {
    width: 0.85 * width,
    height: 0.4 * height,
    backgroundColor: "white",
    borderTopWidth: 2,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderTopColor: "black",
    marginTop: 15,
  },

  attrFont: {
    color: "#666666",
    fontFamily: "RudaR",
  },
  ansFont: {
    color: "black",
    fontFamily: "RudaR",
  },
  statusCSS: {
    backgroundColor: "red",
    padding: 3,
    borderRadius: 5,
  },
  btn1: {
    width: 0.75 * width,
    height: 0.06 * height,
    backgroundColor: "#1C2363",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  btn2: {
    width: 0.75 * width,
    height: 0.06 * height,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#1C2363",
    borderWidth: 2,
    margin: 2,
  },
  buttonWrapper: {
    padding: 10,
  },
  rowDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
  },
});

export default PaymentSuccess;
