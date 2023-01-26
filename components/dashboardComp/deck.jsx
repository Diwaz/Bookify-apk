import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Deck = ({ profile, cartV }) => {
  return (
    <SafeAreaView>
      {profile && (
        <View
          style={{
            display: "flex",
            padding: 10,
            marginTop: 0,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: width * 0.85,
              height: 79,
              backgroundColor: "#1C23631A",
              marginBottom: 12,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderRadius: 4,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{
                  fontFamily: "RudaR",
                  color: "#666666",
                  fontSize: 12,
                }}
              >
                Mobile Number
              </Text>
              <Text
                style={{
                  fontFamily: "RudaB",
                  color: "#1C2363",
                  fontSize: 20,
                }}
              >
                98625XXXXX
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "RudaR",
                    color: "#666666",
                    fontSize: 12,
                  }}
                >
                  Change Number
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: width * 0.85,
              height: 79,
              backgroundColor: "#1C23631A",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{
                  fontFamily: "RudaR",
                  color: "#666666",
                  fontSize: 12,
                }}
              >
                Email Address
              </Text>
              <Text
                style={{
                  fontFamily: "RudaB",
                  color: "#1C2363",
                  fontSize: 20,
                }}
              >
                yourmail@gmail.com
              </Text>
            </View>
          </View>
        </View>
      )}
      {cartV && (
        <View>
          <View style={styles.singleDeck}></View>
          <View style={styles.singleDeck}></View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Deck;

const styles = StyleSheet.create({
  singleDeck: {
    width: width * 0.85,
    height: 79,
    backgroundColor: "#1C23631A",
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 4,
  },
});
