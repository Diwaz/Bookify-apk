import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");

const InputComp = ({
  name,
  onChangeText,
  secureTextEntry,
  type,
  icon,
  ipassword,
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  return (
    <View style={styles.InputWrapper}>
      <Ionicons name={icon} size={14} />
      <TextInput
        onChangeText={onChangeText}
        placeholder={`${name}`}
        clearButtonMode="always"
        style={styles.inputbox}
        secureTextEntry={hidePassword}
        keyboardType={type}
      />
      {ipassword && (
        <Ionicons
          name={hidePassword ? "eye-outline" : "eye-off-outline"}
          size={14}
          onPress={() => setHidePassword(!hidePassword)}
        />
      )}
      {!ipassword && <Ionicons name="add-outline" color={"white"} />}
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  InputWrapper: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#e2e2e2",
    borderWidth: 2,
    borderRadius: 40,
    height: 60,
    width: width * 0.9, //'90%',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    margin: 5,
  },
  inputbox: {
    // backgroundColor: "blue",

    height: 50,
    width: 250,
    fontFamily: "RudaR",
  },
});
