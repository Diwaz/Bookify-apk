import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import React from 'react'

const Profile = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style.userinfo} onPress={() => navigation.navigate('My Profile')}>
        <View>
            <Text>

        <FontAwesome5 name={'user'} style={style.userIcon}/>
            </Text>
        </View>
        <View>

        <Text style={style.usertext}>
             Hari B.
        </Text>
        </View>
        
    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
  userinfo:{
    display: 'flex',
    flex:1,
    padding:3,
    width: 77,
    height:35,
   flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 10,
    color: '#666666',
   // borderColor: '#E2E2E2',
   // borderWidth: 2,
  //  borderRadius:4,
},
userIcon:{
    fontSize: 19,
    paddingRight:2
},
usertext:{
    fontFamily: 'RudaB',
    paddingLeft: 2,
    paddingRight:5,
    fontSize:12
},
})
export default Profile