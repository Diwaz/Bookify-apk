import { View, Text ,SafeAreaView,Dimensions} from 'react-native'
import React from 'react'
import { Dashboard, Header, List } from '../components'
import BalanceComponent from '../components/balanceComponent'
import UpperComponent from '../components/UpperComponent'
import MidComponent from '../components/midComponent'
import BottomComponent from '../components/bottomComponent'

const {width,height} = Dimensions.get('window')
const Profilescreen = () => {
  return (
    <SafeAreaView style={{
      display:'flex',
        flexDirection:'column',
        height:height
    }}>
      <UpperComponent>

      <Header/>
      </UpperComponent>
    <MidComponent>
    <Dashboard 
    edit
    dualdeck
    profile
    displayP={'flex'}
    />
    </MidComponent> 
   <BottomComponent>

    <List book title='Recently Purchase'/>
   </BottomComponent>
    </SafeAreaView>
  )
}

export default Profilescreen