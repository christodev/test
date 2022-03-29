import React from 'react'
import {Controller} from 'react-hook-form'
import {Input} from '..'

const InputControl = ({
  name,
  control,
  required,
  requiredMessage,
  label,
  placeholder,
  isPassword,
  iconName,
  iconColor,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: required,
          message: requiredMessage,
        },
      }}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <Input
          error={error}
          iconName={iconName}
          label={label}
          isPassword={isPassword}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          iconColor={iconColor}
        />
      )}
    />
  )
}

export default InputControl
