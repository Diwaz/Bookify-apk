
import React from 'react'
import { SafeAreaView, TouchableOpacity,View,Text,Dimensions } from 'react-native';
import { LoginHeader,LRForm,NavigateLockscreen } from '../components';

const {width,height}= Dimensions.get('window');

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{
      width:width,//'100%',
      height:height//'100%'
    }}>

    
    <LRForm 
    fname={'Register'} 
    usernamef
    
    emailf
    mobile
    pass
    confirm
    register
    Btn={'Register'} 
    msg={'Let \'s Create Student Account'}
    />
    <NavigateLockscreen
     msg={'Already Have an Account?'} 
     act={'Login'} 
     goto={'Login'} 
     arrow={'arrow-back-outline'}
     />
    </SafeAreaView>
  )
}

export default SignUp;