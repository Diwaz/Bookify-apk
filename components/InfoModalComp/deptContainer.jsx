import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DeptContainer = ({ msg, source, words }) => {
  return (
    <View style={styles.accord}>
      <View>
        <Image source={source} style={styles.image} />
      </View>
      <View
        style={{
          // backgroundColor: "blue",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", margin: 10 }}>
          {words.map((word, index) => (
            <Text key={index} style={styles.word}>
              {word}
            </Text>
          ))}
        </View>
      </View>
      <View>
        <Text>{msg}</Text>
      </View>
    </View>
  );
};

export default DeptContainer;

const styles = StyleSheet.create({
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
  image: {
    width: 100,
    height: 100,
  },
});
