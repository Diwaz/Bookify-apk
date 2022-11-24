import { View, Text,TouchableOpacity,StyleSheet,TouchableWithoutFeedback } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Logo = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:3}} >
        
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Homescreen')}>

<Text style={style.title}>
    Bookify</Text>
</TouchableWithoutFeedback>
        
    </View>
  )
}
const style = StyleSheet.create({
  title: {
    flex: 2,
    fontFamily: 'RudaB',
    fontSize:24,
    color: '#1C2363'
},
})
export default Logo