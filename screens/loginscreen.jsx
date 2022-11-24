
import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity,View,Text,Dimensions,KeyboardAvoidingView } from 'react-native';
import { LoginHeader,LRForm,NavigateLockscreen } from '../components';

const {width,height}= Dimensions.get('window');



const Loginscreen = ({navigation}) => {

 

  return (
    
    <SafeAreaView style={{
      width:width,
      height:height
    }}>

<KeyboardAvoidingView
      keyboardVerticalOffset={50}
      
      behavior={'height'}
      style={{
        flex:1
      }}
      >

    <LoginHeader />

    <LRForm fname={'Login'} 
    usernamef
    pass
    msg={'Please Login With Students Credentials'}
    login
    Btn={'Login'} 
    />
</KeyboardAvoidingView>

    <NavigateLockscreen msg={'Don\'t have an account?'}
     act={'Register Now'}
     goto={'SignUp'}
    arrow={'arrow-forward-outline'}/>

    </SafeAreaView>
  )
}

export default Loginscreen;