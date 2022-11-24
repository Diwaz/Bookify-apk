import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { InputComp, SubmitBtn } from "../components";
import { useNavigation } from "@react-navigation/native";
import actions from "../redux/actions";
import validator from "../utils/validation";
import { showError, showSuccess } from "../utils/helperfunction";

const { width, height } = Dimensions.get("window");

const LRForm = ({
  fname,
  emailr,
  pass,
  confirm,
  mobile,
  usernamef,
  Btn,
  msg,
  login,
  register,
  emailf,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    return () => {
      setState({});
    };
  }, [isLoading]);
  console.log(state);
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    password: "",
    username: "",
    phone: "",
    cpassword: "",
    role: "",
  });

  const { isLoading, email, password, username, phone, cpassword, role } =
    state;

  const updateState = (data) => {
    setState(() => ({
      ...state,
      ...data,
    }));
  };

  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({ isLoading: true });
      try {
        const res = await actions.auth.login({
          email: username,
          password,
        });
        console.log("Res------->", res.success);
        res.success
          ? showSuccess("Logged In ")
          : showError(res === undefined ? "Network Error" : "Login Failed");
        updateState({ isLoading: false });
      } catch (err) {
        showError(err.message);
        console.log(err);
        updateState({ isLoading: false });
      }
    }
  };
  const onSignUp = async () => {
    const checkValid = isValidDataSignUp();
    if (checkValid) {
      updateState({ isLoading: true });
      console.log(email, password, username, phone, role);
      try {
        const res = await actions.auth.signUp({
          email,
          password,
          username,
          phone,
          role: "user",
        });
        console.log("Res->", res);
        updateState({ isLoading: false });
        navigation.navigate("Verify");
      } catch (err) {
        console.log(err);
        updateState({ isLoading: false });
      }
    }
  };

  const isValidData = () => {
    const error = validator({
      username,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };
  const isValidDataSignUp = () => {
    const error = validator({
      email,
      password,
      phone,
      username,
      cpassword,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  return (
    <View style={styles.Formwrapper}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={"position"}
        style={styles.keyboardAvoidContainer}
      >
        <View style={styles.FormHeader}>
          <View>
            <Text
              style={{
                fontFamily: "RudaB",
                color: "#1C2363",
                fontSize: 38,
                margin: 15,
              }}
            >
              {`${fname}`}
            </Text>
          </View>

          <View style={styles.Formlower}>
            <Text
              style={{
                fontFamily: "RudaR",
                color: "#666666",
                fontSize: 13,
              }}
            >
              {`${msg}`}
            </Text>
          </View>
        </View>

        <View style={styles.Forminput}>
          {emailr && (
            <InputComp
              name={"Email"}
              type={"email-address"}
              icon={"text-outline"}
              onChangeText={(email) => updateState({ email })}
            />
          )}
          {usernamef && (
            <InputComp
              name={"Username"}
              icon={"text-outline"}
              onChangeText={(username) => updateState({ username })}
            />
          )}
          {emailf && (
            <InputComp
              type={"email-address"}
              icon={"mail-outline"}
              name={"Email"}
              onChangeText={(email) => updateState({ email })}
            />
          )}
          {mobile && (
            <InputComp
              name={"Mobile Number"}
              icon={"keypad-outline"}
              type={"numeric"}
              onChangeText={(phone) => updateState({ phone })}
            />
          )}
          {pass && (
            <InputComp
              secureTextEntry={true}
              ipassword
              icon={"lock-closed-outline"}
              name={"Password"}
              onChangeText={(password) => updateState({ password })}
            />
          )}
          {confirm && (
            <InputComp
              icon={"lock-closed-outline"}
              ipassword
              secureTextEntry={true}
              name={"Confirm Password"}
              onChangeText={(cpassword) => updateState({ cpassword })}
            />
          )}
        </View>

        {login && (
          <TouchableOpacity
            onPress={onLogin}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SubmitBtn type={`${Btn}`} isLoading={isLoading} />
          </TouchableOpacity>
        )}
        {register && (
          <TouchableOpacity
            onPress={onSignUp}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SubmitBtn type={`${Btn}`} isLoading={isLoading} />
          </TouchableOpacity>
        )}

        {/* <View style={styles.register}>

      </View> */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LRForm;

const styles = StyleSheet.create({
  Formwrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.7,
    width: width,
  },
  FormHeader: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
