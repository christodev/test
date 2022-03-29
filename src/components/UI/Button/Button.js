import {Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
import {styles} from './buttonStyles'
import {COLORS} from '../../../constants'
import Icon from 'react-native-vector-icons/Ionicons'

const Button = ({
  pressHandler,
  disabled,
  activeOpacity,
  text,
  spinner,
  buttonStyle,
  isLogginOrLogout,
  textWhite,
  iconName,
}) => {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[
        buttonStyle,
        {
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      disabled={disabled}
      activeOpacity={activeOpacity}>
      <Text
        style={[
          styles.loginText,
          {
            color: textWhite ? '#fff' : COLORS.primary,
          },
        ]}>
        {text}
      </Text>

      {isLogginOrLogout && !spinner && (
        <Icon
          name={iconName}
          color={textWhite ? '#FFF' : COLORS.primary}
          size={30}
        />
      )}
      {spinner && <ActivityIndicator size={30} color={COLORS.primary} />}
    </TouchableOpacity>
  )
}

export default Button
