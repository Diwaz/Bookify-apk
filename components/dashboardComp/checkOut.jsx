import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");
import Ionicons from "@expo/vector-icons/Ionicons";
import { getCartedPrice } from "../../utils/utils";
import { useSelector } from "react-redux";
import { KhatiSdk } from "rn-all-nepal-payment";
import { useNavigation } from "@react-navigation/native";

const CheckOut = () => {
  const navigation = useNavigation();
  let totalPrice = useSelector((state) => state.workflow.totalPrice);
  let bookNames = useSelector((state) => state.workflow.productNames);

  let discount = 100;
  const [isVisible, setIsVisible] = useState(false);
  const [token, setToken] = useState();

  const _onPaymentComplete = (data) => {
    setIsVisible(false);
    const str = data.nativeEvent.data;
    const resp = JSON.parse(str);
    // console.log({ resp })
    if (resp.event === "CLOSED") {
      // handle closed action
    } else if (resp.event === "SUCCESS") {
      console.log({ data: resp.data });
      setToken(resp.data.token);
      navigation.navigate("PaySuccess");
    } else if (resp.event === "ERROR") {
      // console.log({ error: resp.data })
    }
    return;
  };
  return (
    <View style={styles.checkOutWrapper}>
      <View style={styles.upperOrder}>
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "RudaB",
              fontSize: 20,
            }}
          >
            Order Info
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text style={styles.OrderLeft}>Subtotal</Text>
          </View>
          <View>
            <Text style={styles.OrderRight}>Nrs {totalPrice}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text style={styles.OrderLeft}>Discount</Text>
          </View>
          <View>
            <Text style={[styles.OrderRight, { color: "red" }]}>
              Nrs {discount}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 2,
              width: width * 0.95, //'95%',
              backgroundColor: "black",
              margin: 5,
            }}
          ></View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text style={styles.OrderLeft}>Total</Text>
          </View>
          <View>
            <Text style={styles.OrderRight}>NRS {totalPrice}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {bookNames.length > 0 ? (
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <View style={styles.checkBtn}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "RudaR",
                }}
              >
                Checkout
              </Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "RudaR",
                }}
              >
                Rs {totalPrice}
                <Ionicons name={"arrow-forward-outline"} color={"white"} />
              </Text>
              <KhatiSdk
                amount={totalPrice} // Number in paisa
                isVisible={isVisible} // Bool to show model
                paymentPreference={[
                  // Array of services needed from Khalti
                  "KHALTI",
                  //   "EBANKING",
                  //   "MOBILE_BANKING",
                  //   "CONNECT_IPS",
                  //   "SCT",
                ]}
                productName={bookNames} // Name of product
                productIdentity={"1234567890"} // Unique product identifier at merchant
                onPaymentComplete={_onPaymentComplete} // Callback from Khalti Web Sdk
                productUrl={"http://gameofthrones.wikia.com/wiki/Dragons"} // Url of product
                publicKey={"test_public_key_bd88477777d248f1bb37194df53121dd"} // Test or live public key which identifies the merchant
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.discheckBtn}>
            <Text
              style={{
                color: "white",
                fontFamily: "RudaR",
              }}
            >
              Checkout
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "RudaR",
              }}
            >
              Rs {totalPrice}
              <Ionicons name={"arrow-forward-outline"} color={"white"} />
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  checkOutWrapper: {
    position: "absolute",
    top: height / 5,
    // borderTopWidth: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: width,
    flex: 1,
  },
  upperOrder: {
    display: "flex",
  },
  checkBtn: {
    marginTop: 10,
    width: width * 0.9, //'98%',
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#1C2363",
    borderRadius: 5,
  },
  discheckBtn: {
    marginTop: 10,
    width: width * 0.9, //'98%',
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 5,
  },
  OrderLeft: {
    fontFamily: "RudaB",
  },
  OrderRight: {
    fontFamily: "RudaR",
    color: "#017D39",
  },
});
