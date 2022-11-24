import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web';


const Onboardscreen = ({navigation}) => {
  return (
    <View style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 630
    }}>
        <Text > Welcome to this app</Text>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Login')}}>

                <Text style={{
                    backgroundColor: '#1C2363',
                    width: 100,
                    height:40,
                    padding: 5,
                    color:'white',
                    alignItems: 'center',
                    display:'flex',
                    alignItems:'center'
                }}> Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Onboardscreen;