import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import{DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

// import { useFonts } from 'expo-font';


const  Customdrawer = (props) => {
    // const [loaded] = useFonts({
    //     RudaR: require('../assets/fonts/Ruda-Regular.ttf'),
    //     RudaB: require('../assets/fonts/Ruda-Bold.ttf')
    //   });
      
    //   if (!loaded) {
    //     return null;
    //   }
  return (
    <View style={{flex:1}}>

    <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <View style={style.upperwrapper}>
            <View>
                <Text style={{
                    fontFamily: 'RudaB',
                    color: '#1C2363',
                    fontSize:18
                }}>Hari Bhusal</Text>
                <Text style={{
                    fontFamily: 'RudaB',
                    color: '#666666',
                    fontSize:14
                }}>Student</Text>
            </View>
            <View><Text>
                <TouchableOpacity >

                <Ionicons name='close-circle-outline' size={24} color={'#1C2363'}  />
                </TouchableOpacity>
                </Text></View>
        </View>
        <DrawerItemList {...props}/ >
    </DrawerContentScrollView>
    </View>
  )
}
const style = StyleSheet.create({
    upperwrapper:{
        display:'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight:20,
        height: 80,
        alignItems: 'center'
    }
})

export default Customdrawer ;