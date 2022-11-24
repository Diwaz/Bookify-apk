import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
const {width,height}= Dimensions.get('window');
import Ionicons from '@expo/vector-icons/Ionicons';
import { getCartedPrice } from '../../utils/utils';
import { useSelector } from 'react-redux';



const CheckOut = () => {
    let totalPrice = useSelector((state) => state.workflow.totalPrice)
    
    let discount = 100;
  return (
    <View style={styles.checkOutWrapper}>
      <View style={styles.upperOrder}>

        <View style={{
            padding:10
        }}><Text style={{
            fontFamily:'RudaB',
            fontSize:20
        }}>Order Info</Text></View>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:10
        }}>
            <View><Text style={styles.OrderLeft}>Subtotal</Text></View>
            <View><Text style={styles.OrderRight}>Nrs {totalPrice}</Text></View>
        </View>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:10
        }}>
            <View><Text style={styles.OrderLeft}>Discount</Text></View>
            <View><Text style={[styles.OrderRight,{color:'red'}]}>Nrs {discount}</Text></View>
        </View>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center'
        }}>
            <View style={{
                height:2,
                width:width*0.95,//'95%',
                backgroundColor:'black',
                margin:5
            }}>

            </View>
        </View>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:10
        }}>
            
            
            <View><Text style={styles.OrderLeft}>Total</Text></View>
            <View><Text style={styles.OrderRight}>NRS {totalPrice-discount}</Text></View>
        </View>
        
        
      </View>
        
        
      <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
      }}>
        
      <View style={styles.checkBtn}>
        <Text style={{
            color: 'white',
            fontFamily:'RudaR'
        }}>
            Checkout 
        </Text>
            <Text style={{
            color: 'white',
            fontFamily:'RudaR'
        }}>
            Rs {totalPrice - discount} {' '}
            <Ionicons name={'arrow-forward-outline'} color={'white'} />
            </Text>

      </View>
            </View>
    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({
    checkOutWrapper:{
        position:'absolute',
       // top:height/1.5,
       // borderTopWidth: 2,
        backgroundColor:'white',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:width,
        flex:1
        
    },
    upperOrder:{
        display:'flex'
    },
    checkBtn:{
        marginTop:10,
        width:width*0.9,//'98%',
        height: 40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        alignItems:'center',
        backgroundColor:'#1C2363',
        borderRadius:5
    },
    OrderLeft:{
        fontFamily:'RudaB',

    },
    OrderRight:{
        fontFamily:'RudaR',
        color:'#017D39'
    }
})