import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MidComponent = ({children}) => {
  return (
    <View style={{
        flex:0.7
    }}>
      {children} 
    </View>
  )
}

export default MidComponent

const styles = StyleSheet.create({})