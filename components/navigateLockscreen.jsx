import { StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const {width,height}= Dimensions.get('window');



const NavigateLockscreen = ({msg,act,goto,arrow}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.Containerwrapper}>
      <Text
      style={{
        fontFamily:'RudaR',
        
      }}
      >{`${msg}`} {' '}</Text>
      <TouchableOpacity style={{
         display:'flex',
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center'
      }} onPress={()=>navigation.navigate(`${goto}`)}>

      <Text style={{
          fontFamily:'RudaB',
          color:'#1C2363',
        }}>{`${act}`}
        <Ionicons name={`${arrow}`} color={'#1C2363'} size={10}/></Text>
        </TouchableOpacity>
    </View>
  )
}

export default NavigateLockscreen

const styles = StyleSheet.create({
    Containerwrapper:{
        height:100,
        width:width,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})