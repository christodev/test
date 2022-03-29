import {Text, View, TextInput} from 'react-native'
import React from 'react'
import {styles} from './inputStyles'
import {COLORS} from '../../../constants'
import Icon from 'react-native-vector-icons/Ionicons'

const Input = ({
  label,
  iconName,
  placeholder,
  onChange,
  onBlur,
  value,
  isPassword,
  error,
  isSearchField,
  iconColor,
  clearSearch,
  clearIcon,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          isSearchField ? styles.searchWrapper : styles.inputWrapper,
          {borderColor: error ? COLORS.error : COLORS.primary},
        ]}>
        {iconName && <Icon name={iconName} size={20} color={iconColor} />}
        <TextInput
          placeholder={placeholder}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          secureTextEntry={isPassword}
          style={isSearchField ? styles.searchText : styles.textInput}
          placeholderTextColor={isSearchField && '#fff'}
        />
        {isSearchField && value.length !== 0 && (
          <Icon
            onPress={clearSearch}
            name={clearIcon}
            size={30}
            color={iconColor}
          />
        )}
      </View>
      {error && (
        <View style={styles.errorWrapper}>
          <Icon name="alert-circle" size={15} color={COLORS.error} />
          <Text style={styles.errorState}>{error.message}</Text>
        </View>
      )}
    </View>
  )
}

export default Input
