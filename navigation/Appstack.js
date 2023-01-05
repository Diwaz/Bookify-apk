import "react-native-gesture-handler";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "../screens/homescreen";
import Purchasescreen from "../screens/purchasescreen";
import Settingscreen from "../screens/settingscreen";
import OfferScreen from "../screens/offerscreen";
import Logoutscreen from "../screens/logoutscreen";
import Profilescreen from "../screens/profilescreen";
import CustomDrawer from "../components/cusomedrawer";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detailscreen from "../screens/detailscreen";
import Cartscreen from "../screens/cartscreen";
import Searchscreen from "../screens/searchscreen";
import CategoryDetails from "../screens/categoryDetails";
import InstitutionScreen from "../screens/institutionScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import PurchaseScreen from "../screens/purchasescreen";
import PDFView from "../screens/PdfView";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeStack = ({ navigation, route }) => {
  // const tabHiddenRoutes = ["Details", "CategoryDetails"];

  // if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
  //   navigation.setOptions({ tabBarStyle: { display: "none" } });
  // } else {
  //   navigation.setOptions({ tabBarStyle: { display: "flex" } });
  // }
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Homescreen"
    >
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="Details" component={Detailscreen} />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryDetails}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <Stack.Screen name="InstitutionDetails" component={InstitutionScreen} />
      <Stack.Screen name="Cart" component={Cartscreen} />
      <Stack.Screen name="Search" component={Searchscreen} />
    </Stack.Navigator>
  );
};

export const PurchaseStack = ({ navigation, route }) => {
  // const tabHiddenRoutes = ["Details", "CategoryDetails"];

  // if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
  //   navigation.setOptions({ tabBarStyle: { display: "none" } });
  // } else {
  //   navigation.setOptions({ tabBarStyle: { display: "flex" } });
  // }
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="PurchaseScreen"
    >
      <Stack.Screen name="PurchaseScreen" component={PurchaseScreen} />
      <Stack.Screen name="PdfViewer" component={PDFView} />
    </Stack.Navigator>
  );
};

const CustomTabBarBtn = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#1C2363",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Appstack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 70,
            ...styles.shadow,
          },
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={"home"}
                size={23}
                color={focused ? "#1C2363" : "#748c94"}
              />
              {/* <Text
                style={{
                  color: focused ? "#1C2363" : "#748c94",
                }}
              >
                Home
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={OfferScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={"magnet"}
                size={23}
                color={focused ? "#1C2363" : "#748c94"}
              />
              {/* <Text
                style={{
                  color: focused ? "#1C2363" : "#748c94",
                }}
              >
                Offer
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Purchase"
        component={PurchaseStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"receipt"}
              size={25}
              style={{
                color: "#fff",
                ...styles.shadow,
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarBtn {...props} />,
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={Profilescreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={"person"}
                size={23}
                color={focused ? "#1C2363" : "#748c94"}
              />
              {/* <Text
                style={{
                  color: focused ? "#1C2363" : "#748c94",
                }}
              >
                Profile
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settingscreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={"settings"}
                size={23}
                color={focused ? "#1C2363" : "#748c94"}
              />
              {/* <Text
                style={{
                  color: focused ? "#1C2363" : "#748c94",
                }}
              >
                Setting
              </Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );

  // <Drawer.Navigator
  //   drawerContent={(props) => <CustomDrawer {...props} />}
  //   screenOptions={{
  //     headerShown: false,
  //     drawerLabelStyle: {
  //       marginLeft: -20,
  //       fontFamily: "RudaB",
  //       fontSize: 15,
  //     },
  //     drawerActiveBackgroundColor: "#1C23631A",
  //     drawerActiveTintColor: "#1C2363",
  //   }}
  //   initialRouteName="Home"
  // >
  //   <Drawer.Screen
  //     name="Home"
  //     options={{
  //       drawerIcon: ({ color }) => (
  //         <Ionicons name="home-outline" size={22} color={color} />
  //       ),
  //     }}
  //     component={HomeStack}
  //   />
  //   <Drawer.Screen
  //     name="My Profile"
  //     options={{
  //       drawerIcon: ({ color }) => (
  //         <Ionicons name="person-outline" size={22} color={color} />
  //       ),
  //     }}
  //     component={Profilescreen}
  //   />
  //   <Drawer.Screen
  //     name="Purchase History"
  //     options={{
  //       drawerIcon: ({ color }) => (
  //         <Ionicons name="reader-outline" size={22} color={color} />
  //       ),
  //     }}
  //     component={Purchasescreen}
  //   />
  //   <Drawer.Screen
  //     name="Setting"
  //     options={{
  //       drawerIcon: ({ color }) => (
  //         <Ionicons name="settings-outline" size={22} color={color} />
  //       ),
  //     }}
  //     component={Settingscreen}
  //   />
  //   <Drawer.Screen
  //     name="Logout"
  //     options={{
  //       drawerIcon: ({ color }) => (
  //         <Ionicons name="log-out-outline" size={22} color={color} />
  //       ),
  //     }}
  //     component={Logoutscreen}
  //   />
  // </Drawer.Navigator>
};

export default Appstack;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
