import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  ActivityIndicator,
} from "react-native";
import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Deck from "./dashboardComp/deck";
import CartView from "./dashboardComp/cartView";
import CheckOut from "./dashboardComp/checkOut";
import actions from "../redux/actions";
import { useSelector } from "react-redux";
import { showCart } from "../utils/helperfunction";
// import BottomSheet, {
//   BottomSheetView,
//   BottomSheetModal,
//   BottomSheetModalProvider,
// } from "@gorhom/bottom-sheet";

import MidComponent from "../components/midComponent";
import BottomComponent from "../components/bottomComponent";
import { getCartData, setCartData } from "../utils/utils";

const { height, width } = Dimensions.get("window");
const Dashboard = ({
  btn,
  title,
  description,
  Info,
  bell,
  edit,
  displayP,
  dualdeck,
  welcome,
  profile,
  details,
  id,
  BookInfo,
  bookName,
  bookAuth,
  bookImg,
  views,
  uptime,
  price,
  cart,
  checkOut,
  iscarted,
  CollegeInfo,
  address,
}) => {
  const navigation = useNavigation();
  const cartData = useSelector((state) => state.workflow.cartData);
  const [isLoading, setLoading] = useState(false);

  // const addBookToCart = (id)=>{
  //         actions.addToCart({
  //             id,
  //         })
  // }
  console.log(cartData, id);
  const logout = () => {
    // setLoading(true);
    // setTimeout(() => {
    //   actions.auth.logout();
    //   setLoading(false);
    //   actions.auth.isLogin(false);
    // }, 2000);
    console.log("recent item on async storage", getCartData());
  };
  // hooks
  const sheetRef = useRef(null);
  useEffect(() => {
    handleSnapPress(1);
  }, []);
  // variables
  const snapPoints = useMemo(() => ["65%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  console.log("this item is", iscarted);

  const cartAction = () => {
    setLoading(true);
    setTimeout(() => {
      actions.workflow.addToCart({
        id,
      });
      setLoading(false);
    }, 10);

    setTimeout(() => {
      setCartData(cartData);
      console.log("async data when adding", getCartData());
    }, 100);

    showCart(bookName + " - Rs " + price);
  };
  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <MidComponent>
        <View style={style.welcome}>
          <View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",

                paddingTop: 30,
                paddingLeft: 26,
                paddingRight: 26,
                flexDirection: "row",
                backgroundColor: "#1c23631a",
                height: height * 0.26,
                position: "relative",
              }}
            >
              {welcome && (
                <Text
                  style={{
                    fontFamily: "RudaB",
                    color: "#1C2363",
                    fontSize: 24,
                  }}
                >
                  Welcome,Hari
                </Text>
              )}
              {cart && (
                <Text
                  style={{
                    fontFamily: "RudaB",
                    color: "#1C2363",
                    fontSize: 24,
                  }}
                >
                  My Cart
                </Text>
              )}
              {profile && (
                <View
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RudaB",
                      color: "#1C2363",
                      fontSize: 24,
                    }}
                  >
                    Hari Bhusal
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RudaR",
                      color: "#666666",
                      fontSize: 14,
                    }}
                  >
                    Kathmandu,Nepal
                  </Text>
                </View>
              )}
              {details && (
                <View
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RudaB",
                      color: "#1C2363",
                      fontSize: 20,
                    }}
                  >
                    {bookName}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "RudaR",
                        color: "#666666",
                        fontSize: 14,
                        marginRight: 20,
                      }}
                    >
                      {bookAuth}
                    </Text>
                    <Ionicons name={"time-outline"} size={15} />
                    <Text
                      style={{
                        fontFamily: "RudaR",
                        color: "#666666",
                        fontSize: 14,
                        marginRight: 20,
                      }}
                    >
                      {" "}
                      {uptime}
                    </Text>
                    <Ionicons name={"eye-outline"} size={15} />

                    <Text
                      style={{
                        fontFamily: "RudaR",
                        color: "#666666",
                        fontSize: 14,
                        marginRight: 20,
                      }}
                    >
                      {" "}
                      {views}{" "}
                    </Text>
                  </View>
                </View>
              )}
              <TouchableOpacity
                style={{
                  width: 31,

                  height: 36,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 4,
                }}
                onPress={logout}
              >
                {bell && <FontAwesome5 name={"bell"} size={18} />}
                {edit && <Ionicons name={"construct"} size={18} />}
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.lowerwrapper}>
            {cart && <CartView />}
            <View
              style={{
                position: "absolute",
                height: 190,
                //maxWidth: 800,
                minWidth: 260,
                width: width * 0.9, //'90%',
                top: height * 0.15,
                display: `${displayP}`,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
              }}
            >
              {dualdeck && <Deck profile />}

              {BookInfo && (
                <View
                  style={{
                    display: "flex",

                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    width: width * 0.9,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Image
                      source={{
                        uri: `https://shineducation.com${bookImg}`,
                      }}
                      style={{
                        width: 89,
                        height: 141,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      borderWidth: 0,
                      width: width * 0.6,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          width: width * 0.5,
                          height: 81,
                        }}
                      >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consequatur, enim. Tenetur provident est amet
                        quam!
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginTop: 22,
                        alignItems: "center",
                        width: width * 0.6,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginRight: 10,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginRight: 5,
                            width: 32,
                            height: 32,
                            backgroundColor: "#e2e2e2",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 4,
                          }}
                        >
                          <Ionicons name={"wallet"} size={21} />
                        </View>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: "RudaB",
                            color: "#1C2363",
                          }}
                        >
                          {" "}
                          Rs {price}
                        </Text>
                      </View>

                      {!iscarted && (
                        <TouchableOpacity onPress={cartAction}>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              width: width * 0.23,
                              height: 30,
                              backgroundColor: "#009343",
                              borderRadius: 4,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {!isLoading ? (
                              <Ionicons
                                name={"cart-outline"}
                                size={16}
                                color={"white"}
                              />
                            ) : (
                              <ActivityIndicator size="small" color="white" />
                            )}

                            <Text style={{ color: "white", fontSize: 10 }}>
                              {" "}
                              Add To Cart
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              )}
              {CollegeInfo && (
                <View
                  style={{
                    display: "flex",

                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    width: width * 0.9,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Image
                      source={{
                        uri: `${bookImg}`,
                      }}
                      style={{
                        width: 89,
                        height: 141,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      borderWidth: 0,
                      width: width * 0.6,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          width: width * 0.5,
                          height: 81,
                        }}
                      >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consequatur, enim. Tenetur provident est amet
                        quam!
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginTop: 22,
                        alignItems: "center",
                        width: width * 0.6,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginRight: 10,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginRight: 5,
                            width: 32,
                            height: 32,
                            backgroundColor: "#e2e2e2",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 4,
                          }}
                        >
                          <Ionicons name={"star-half-outline"} size={19} />
                        </View>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: "RudaB",
                            color: "#1C2363",
                          }}
                        >
                          {" "}
                          8.5
                        </Text>
                      </View>

                      {
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: width * 0.28,
                            height: 30,
                            backgroundColor: "#009343",
                            borderRadius: 4,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Ionicons
                            name={"location-outline"}
                            size={16}
                            color={"white"}
                          />

                          <Text style={{ color: "white", fontSize: 8 }}>
                            {address}
                          </Text>
                        </View>
                      }
                    </View>
                  </View>
                </View>
              )}

              {Info && (
                <View style={style.lowermanager}>
                  <View>
                    <Text
                      style={{
                        fontFamily: "RudaB",
                        fontSize: 18,
                        marginBottom: 10,
                      }}
                    >
                      {title}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontFamily: "RudaR",
                        fontSize: 14,
                        marginBottom: 10,
                      }}
                    >
                      {description}
                    </Text>
                  </View>
                  {btn && (
                    <TouchableOpacity
                      style={{
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                        backgroundColor: "#1C23631A",
                        width: 136,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onPress={() => actions.auth.CLEAR_REDUX_STATE}
                    >
                      <Text
                        style={{
                          fontFamily: "RudaB",
                          fontSize: 14,
                          color: "#1C2363",
                        }}
                      >
                        Go to Library
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          </View>
        </View>
      </MidComponent>
      <BottomComponent>
        {checkOut && (
          <View style={style.container}>
            {/* <Button title="Checkout" onPress={() => handleSnapPress(2)} />
            <Button title="Close" onPress={() => handleClosePress()} /> */}
            {/* <BottomSheet
              ref={sheetRef}
              snapPoints={snapPoints}
              onChange={handleSheetChange}
            >
              <BottomSheetView>
                <CheckOut />
              </BottomSheetView>
            </BottomSheet> */}
            <CheckOut />
          </View>
        )}
      </BottomComponent>
    </View>
  );
};
const style = StyleSheet.create({
  welcome: {
    height: 300,
    display: "flex",
    flex: 1,
  },
  upper: {
    display: "flex",
    justifyContent: "space-between",

    paddingTop: 30,
    paddingLeft: 26,
    paddingRight: 26,
    flexDirection: "row",
    backgroundColor: "#1c23631a",
    height: 171,
    position: "relative",
  },
  lower: {
    position: "absolute",
    height: 190,
    //maxWidth: 800,
    minWidth: 260,
    width: width * 0.9, //'90%',
    top: -height * 0.2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
  lowerwrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
    marginBottom: height * 0.08,
  },
  upperwrapper: {
    display: "flex",
    alignItems: "center",
  },
  bell: {
    padding: 6,
    width: 31,

    height: 36,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,

    fontSize: 19,
    color: "black",
    borderColor: "#E2E2E2",
    borderWidth: 2,
    backgroundColor: "#ffffff",
  },
  lowermanager: {
    padding: 12,

    width: width * 0.84,
  },
  container: {
    position: "absolute",
    width: width,
    height: 400,
    top: height / 2,
  },
});
export default Dashboard;
