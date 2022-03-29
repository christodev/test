import React from 'react'
import {StatusBar} from 'react-native'
import MainNavigation from './src/navigation'
import {Provider} from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  )
}

export default App
