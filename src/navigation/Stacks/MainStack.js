import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Dashboard, Login} from '../../components'

const MainStackNavigator = createNativeStackNavigator()

const MainStack = () => {
  return (
    <MainStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <MainStackNavigator.Screen name="Login" component={Login} />
      <MainStackNavigator.Screen name="Dashboard" component={Dashboard} />
    </MainStackNavigator.Navigator>
  )
}

export default MainStack
