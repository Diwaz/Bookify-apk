import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { LoginHeader, LRForm, NavigateLockscreen } from "../components";

const { width, height } = Dimensions.get("window");

const Loginscreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        backgroundColor: "blue",
        flexDirection: "column",
      }}
    >
      <LoginHeader />
      <View
        style={{
          height: height * 0.77,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior={"height"}
          style={{
            flex: 1,
          }}
        >
          <LRForm
            fname={"Login"}
            usernamef
            pass
            msg={"Please Login With Students Credentials"}
            login
            Btn={"Login"}
          />
        </KeyboardAvoidingView>

        <NavigateLockscreen
          msg={"Don't have an account?"}
          act={"Register Now"}
          goto={"SignUp"}
          arrow={"arrow-forward-outline"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Loginscreen;
