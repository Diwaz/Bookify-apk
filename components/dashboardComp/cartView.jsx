import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckBox from "expo-checkbox";

import {
  getCartData,
  getCartedData,
  getCartId,
  getUserData,
  setCartData,
} from "../../utils/utils";
import { cartData } from "./cartData";
import actions from "../../redux/actions";

const { width, height } = Dimensions.get("window");
const CartView = () => {
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    let tprice = getPrice(checked);
    actions.workflow.setCartPrice(tprice);
  }, [checked]);
  const getPrice = (item) => {
    let Idarr = item;
    let dataarr = [];
    for (let i = 0; i < Idarr.length; i++) {
      dataarr.push(
        cartData.find((el) => {
          return Idarr[i] === el.id;
        })
      );
    }
    let totalPrice = 0;
    dataarr
      .filter((res) => res.price)
      .map((el) => {
        totalPrice = totalPrice + el.price;
      });
    console.log(totalPrice);
    return totalPrice;
  };

  const cartItems = getCartedData();
  const deleteCartItems = (id) => {
    actions.workflow.deleteFromCart({
      id,
    });
    setCartData(cartItems);
    console.log("index from cart", id);
    console.log("async user data on delete", getCartData());
  };

  const renderCart = ({ item }) => (
    <View style={styles.itemWrapper}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CheckBox
          value={checked.includes(item.id)}
          onValueChange={() => {
            const newIds = [...checked];
            const index = newIds.indexOf(item.id);
            if (index > -1) {
              newIds.splice(index, 1);
            } else {
              newIds.push(item.id);
            }

            setChecked(newIds);
          }}
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image source={`${item.image}`} style={styles.image} />
      </View>
      <View style={styles.infowrapper}>
        <Text
          style={{
            fontFamily: "RudaR",
            color: "#1C2363",
          }}
        >
          {item.bookName}
        </Text>
        <Text
          style={{
            fontFamily: "RudaR",
          }}
        >
          Rs. {item.price}
        </Text>
      </View>
      <View style={styles.controlWrapper}>
        <View style={styles.controlLayout}>
          <TouchableOpacity
            onPress={() => {
              let Idarr = [];

              Idarr.push(
                cartItems.map((item) => {
                  return item.id;
                })
              );
              console.log("array of cart items", Idarr[0]);
              let idx = Idarr[0].indexOf(item.id);
              console.log("index of dis", idx);
              deleteCartItems(item.id);
            }}
          >
            <Ionicons name={"trash-outline"} size={16} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.cartWrapper}>
      <View style={styles.deckWrapper}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent:'space-between',
            marginLeft: 10,
          }}
        >
          <CheckBox
            value={cartItems.length == checked.length}
            onValueChange={() => {
              const newIds = [...checked];
              cartItems.map((t) => {
                const index = newIds.indexOf(t.id);
                if (index > -1 && cartItems.length == checked.length) {
                  newIds.splice(index, 1);
                } else if (index > -1 && cartItems.length != checked.length) {
                  return;
                } else {
                  newIds.push(t.id);
                }
                setChecked(newIds);
              });
            }}
          />
          <Text
            style={{
              marginLeft: 10,
            }}
          >
            All
          </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          renderItem={renderCart}
          keyExtractor={(item) => item.id.toString()}
          extraData={checked}
        />
      </View>
    </View>
  );
};

export default CartView;

const styles = StyleSheet.create({
  cartWrapper: {
    flex: 1,
    position: "absolute",
    width: width * 0.85, //'90%',
    backgroundColor: "white",
    top: height * 0.15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 4,
  },
  deckWrapper: {
    padding: 5, //'5%',
    height: height * 0.5,
  },
  itemWrapper: {
    width: width * 0.78,
    backgroundColor: "#e2e2e2",
    height: height * 0.1,
    margin: 4,
    borderRadius: 5,
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
  },
});
