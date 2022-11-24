import "react-native-gesture-handler";

import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "../screens/homescreen";
import Purchasescreen from "../screens/purchasescreen";
import Settingscreen from "../screens/settingscreen";
import Logoutscreen from "../screens/logoutscreen";
import Profilescreen from "../screens/profilescreen";
import CustomDrawer from "../components/cusomedrawer";
import Ionicons from "@expo/vector-icons/Ionicons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detailscreen from "../screens/detailscreen";
import Cartscreen from "../screens/cartscreen";
import Searchscreen from "../screens/searchscreen";
import CategoryDetails from "../screens/categoryDetails";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Homescreen"
    >
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="Details" component={Detailscreen} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack.Screen name="Cart" component={Cartscreen} />
      <Stack.Screen name="Search" component={Searchscreen} />
    </Stack.Navigator>
  );
};

const Appstack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: "RudaB",
          fontSize: 15,
        },
        drawerActiveBackgroundColor: "#1C23631A",
        drawerActiveTintColor: "#1C2363",
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
        component={HomeStack}
      />
      <Drawer.Screen
        name="My Profile"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
        component={Profilescreen}
      />
      <Drawer.Screen
        name="Purchase History"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="reader-outline" size={22} color={color} />
          ),
        }}
        component={Purchasescreen}
      />
      <Drawer.Screen
        name="Setting"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
        component={Settingscreen}
      />
      <Drawer.Screen
        name="Logout"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="log-out-outline" size={22} color={color} />
          ),
        }}
        component={Logoutscreen}
      />
    </Drawer.Navigator>
  );
};

export default Appstack;
