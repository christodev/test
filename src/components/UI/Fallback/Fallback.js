import {Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './fallbackStyles'

const Fallback = ({fallbackText, action, onActionHandler}) => {
  return (
    <View style={styles.fallbackContainer}>
      <Text>{fallbackText}</Text>
      {action.enabled && (
        <TouchableOpacity onPress={onActionHandler} activeOpacity={1}>
          <Text style={styles.fallbackText}>{action.title}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Fallback
