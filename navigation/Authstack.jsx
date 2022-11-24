import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screens/homescreen';
import Loginscreen from '../screens/loginscreen';
import Onboardscreen from '../screens/onBoardscreen';
import  VerifyScreen  from '../screens/verifyScreen';
import { HomeStack } from './Appstack';
import SignUp from '../screens/signUpscreen';

const Stack = createNativeStackNavigator();

const Authstack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
            <Stack.Screen name="Login" component={Loginscreen} />
            <Stack.Screen name="onBoard" component={Onboardscreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Verify" component={VerifyScreen} />
        

          </Stack.Navigator>
  )
}

export default Authstack;