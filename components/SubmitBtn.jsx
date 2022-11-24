import { StyleSheet, Text, View,TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react'


const SubmitBtn = ({type,isLoading}) => {
    
  return (
    
    

    <View style={styles.btnWrapper}>

      {!isLoading ? <Text style={{
        fontFamily:'RudaR',
        color:'#ffffff'
      }}>
        {`${type}`}
      </Text>:
      <ActivityIndicator size="large" color="white"/>
      }
    </View>
         
         
  )
}

export default SubmitBtn

const styles = StyleSheet.create({
    btnWrapper:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:138,
        height:57,
        backgroundColor:'#009343',
        borderRadius:50,
        marginTop:20
    }
})