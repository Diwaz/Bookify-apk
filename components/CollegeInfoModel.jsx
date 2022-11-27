import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import React, { useRef } from "react";
import { Department, InfoHeader } from "./InfoModalComp";

const CollegeModal = () => {
  return (
    <View style={styles.infowrapper}>
      <InfoHeader Header1="Department" Header2="Events" Header3="Teams" />
      <ScrollView horizontal>
        <Department />
        <Department />
      </ScrollView>
    </View>
  );
};

export default CollegeModal;

const styles = StyleSheet.create({
  infowrapper: {
    marginTop: 250,
    display: "flex",

    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
});
