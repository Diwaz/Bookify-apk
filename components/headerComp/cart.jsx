import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItemNumber = useSelector((state)=> state.workflow.cartData)
  const navigaion = useNavigation();
  return (
    <TouchableOpacity style={style.cartWrapper} onPress={()=> navigaion.navigate('Cart')}>
            <View style={style.cartNumber}>
                <Text style={{
                    color:'white',
                    fontSize:8,
                    
                }}>
                    {cartItemNumber.length}
                </Text>
            </View>
            <Text>
            <Ionicons name='cart-outline' style={style.cart} size={24} color={'#1C2363'} />
            </Text>
    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
  cartWrapper:{
        
    position:'relative',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: 3,
    flex:1
},
cartNumber:{
    position:'absolute',
    top:-5,
    right:5,
    backgroundColor:'#009343',
    height:15,
    width:17,
    //br50p
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    

},
cart:{
   // borderRadius:4,
    //borderColor:'#e2e2e2',
    //borderWidth: 1,
  //  padding:3
},
})
export default Cart