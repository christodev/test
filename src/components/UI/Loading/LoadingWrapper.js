import {ActivityIndicator, Text, View} from 'react-native'
import React from 'react'
import {styles} from './loadingStyles'

const LoadingWrapper = ({size, color, loadingText, page}) => {
  return (
    <View
      style={[
        styles.loading,
        {
          opacity: page === 0 ? 1 : 0,
        },
      ]}>
      <ActivityIndicator size={size} color={color} />
      {loadingText && <Text style={styles.loadingText}>{loadingText}</Text>}
    </View>
  )
}

export default LoadingWrapper
