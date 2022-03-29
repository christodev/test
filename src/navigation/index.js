import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainStack from './Stacks/MainStack'

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default MainNavigation
