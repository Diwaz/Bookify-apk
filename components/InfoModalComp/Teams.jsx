import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const Teams = () => {
  return (
    <View style={styles.bottomComponent}>
      <View style={styles.topLayer}>
        <View>
          <Image
            source={require("../../assets/team1.jpeg")}
            style={styles.coverImage}
          />
        </View>
        <View style={styles.imageDesp}>
          <Text>Elon Musk</Text>
          <Text>CEO,Co.</Text>
        </View>
      </View>
      <View style={styles.midLayer}>
        <View style={styles.col1}>
          <View>
            <Image
              source={require("../../assets/team2.jpg")}
              style={styles.coverImage}
            />
          </View>
          <View style={styles.imageDesp}>
            <Text>Bill gates</Text>
            <Text>Managing Director</Text>
          </View>
        </View>
        <View style={styles.col1}>
          <View>
            <Image
              source={require("../../assets/team3.jpg")}
              style={styles.coverImage}
            />
          </View>
          <View style={styles.imageDesp}>
            <Text>Jeff bezos</Text>
            <Text>Adminstrator Head</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.midLayer}>
          <View style={styles.col1}>
            <View>
              <Image
                source={require("../assets/team4.jpg")}
                style={styles.coverImage}
              />
            </View>
            <View style={styles.imageDesp}>
              <Text>Elon Musk</Text>
              <Text>CEO,co-founder</Text>
            </View>
          </View>
          <View style={styles.col1}>
            <View>
              <Image
                source={require("../assets/team5.jpg")}
                style={styles.coverImage}
              />
            </View>
            <View style={styles.imageDesp}>
              <Text>Elon Musk</Text>
              <Text>CEO,co-founder</Text>
            </View>
          </View>
        </View> */}
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({
  bottomComponent: {
    borderRadius: 4,
    width: width,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  coverImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  topLayer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imageDesp: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  midLayer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,

    marginBottom: 10,
    width: width,
  },
  col1: {
    justifyContent: "center",
    alignItems: "center",
  },
});
