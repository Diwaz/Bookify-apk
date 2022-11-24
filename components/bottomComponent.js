import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomComponent = ({children}) => {
  return (
    <View style={{
        flex:1,
        
    }}>
      {children} 
    </View>
  )
}

export default BottomComponent

const styles = StyleSheet.create({})