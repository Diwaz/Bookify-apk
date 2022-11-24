import { StyleSheet, Text, TouchableOpacity, View,Dimensions,SafeAreaView,TextInput,KeyboardAvoidingView } from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux';
const {width,height} = Dimensions.get('window');

const VerifyScreen = ({ navigation: { goBack } ,navigation}) => {

  const userData = useSelector((state) => state.auth.userData)
   
  let textInput = useRef(null)
  const [internalVal,setInternalVal] = useState("");
  const lengthInput = 6;
  const defaultCountdown = 30;
  const [countdown,setCountdown]=useState(defaultCountdown);
  let clockCall= null;
  const [enableResend,setEnableResend]= useState(false);

  useEffect(()=>{
    clockCall=setInterval(()=>{
      decrementClock();
    },1000)
    return()=>{
      clearInterval(clockCall)
    }
  })

  useEffect(()=>{
    textInput.focus();
  },[])

  const decrementClock=()=>{
    if(countdown===0){
      setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    }else{
      setCountdown(countdown-1);
    }
  }

  const onChangeText=(val)=>{
    setInternalVal(val);
    if(lengthInput==val.length){
      navigation.navigate('Login')
    }
  }
  const onResendOTP=()=>{
    if(enableResend){
      setCountdown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall =setInterval(()=>{
        decrementClock()
      },1000)
    }
  }
  return (
    <SafeAreaView>

    <View style={styles.verifyWrapper}>
      <KeyboardAvoidingView
      keyboardVerticalOffset={50}
      
      behavior={'position'}
      style={styles.keyboardAvoidContainer}
      >

      <View style={styles.verifyHeader}>
       <TouchableOpacity onPress={()=>goBack()}>
            <Text><Ionicons name={'chevron-back-outline'} size={24}/></Text>
        </TouchableOpacity>
        <Text
        style={{
          fontFamily:'RudaB',
          fontSize:20
        }}
        >Verify Phone Number</Text>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text>
            Input Your OTP Code sent Via SMS
          </Text>
        </View>
        <View style={styles.inputArea}>
        <View >
          <TextInput 
          ref={(input)=>textInput = input }
          onChangeText={onChangeText}
          value={internalVal}
          maxLength={lengthInput}
          returnKeyType='done'
          keyboardType='numeric'
          style={{
            width:1,
            height:1,
            opacity:0
          }}
          />
        </View>
        <View style={styles.containerInput} >
          {Array(lengthInput).fill().map((data,index)=>(
            <View key={index} style={[styles.cellView,{
              borderBottomColor: index === internalVal.length ? "#009343" : "#1C2363"
            }]}>
            <View style={styles.cellText}>
              <TouchableOpacity onPress={()=>textInput.focus()}>

              <Text >
                {internalVal && internalVal.length > 0 ? internalVal[index]: ""}
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          ))}
          
        </View>
        </View>
        <View style={styles.verifyFooter}>
          <View style={{
            flexDirection:'row-reverse',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal:20
          }}>

          <TouchableOpacity onPress={onResendOTP}>

          <Text 
          style={{
            color: enableResend ? '#1C2363' : 'gray'
          }}>Resend OTP ({countdown})</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View></View>
</KeyboardAvoidingView>
    </View>
        </SafeAreaView>
  )
}

export default VerifyScreen

const styles = StyleSheet.create({
  verifyWrapper:{
    display:'flex',
    width:width,
    height:height,
    
  },
  keyboardAvoidContainer:{
   
  },
  verifyHeader:{
    display:'flex',
    flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60,
        paddingHorizontal:20,
       // backgroundColor:'red',
        marginTop:20,
        
    },
    cellView:{
      
      borderBottomWidth:2,
      width:40,
      paddingVertical:10,
      justifyContent:'center',
      alignItems:'center',
      margin:5
      
    },
    contentWrapper:{
      justifyContent:'center',
      alignItems:'center',
      height:height*0.8,
      
    },
    containerInput:{
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
    },
    verifyFooter:{
   
      flex:1,
      flexDirection: 'column-reverse',
   
      width:width
      
    },
    inputArea:{
      flex:1
    },
    content:{
      flex:2,
      justifyContent:'center',
      alignItems:'center'
    }
    

})