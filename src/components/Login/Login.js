import {
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native'
import React from 'react'
import {IMAGES} from '../../assets/images'
import {styles} from './loginStyles'
import {Button, InputControl} from '../UI'
import {COLORS} from '../../constants'

const Login = ({handleSubmit, signIn, control, isValid, loading, error}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <ImageBackground source={IMAGES.bg} style={styles.bgImage}>
        <View style={styles.screen}>
          <Image source={IMAGES.news} style={styles.image} />
          <View style={styles.formContainer}>
            <Text style={styles.loginTitle}>Welcome Back!</Text>
            <Text style={styles.loginDescription}>
              Login to stay updated with the latest articles!
            </Text>
            {error && <Text style={styles.errorText}>{error}</Text>}
            <InputControl
              control={control}
              label="Username"
              name="username"
              placeholder="enter your username"
              required
              requiredMessage="Username is required"
              iconName="person"
              iconColor={COLORS.primary}
            />

            <InputControl
              control={control}
              label="Password"
              name="password"
              isPassword
              required
              placeholder="enter your password"
              requiredMessage="Password is required"
              iconName="lock-closed"
              iconColor={COLORS.primary}
            />
          </View>
        </View>
        <Button
          buttonStyle={styles.loginButton}
          spinner={loading}
          activeOpacity={0.8}
          pressHandler={handleSubmit(signIn)}
          text="Login"
          disabled={!isValid || loading}
          isLogginOrLogout
          iconName="arrow-forward"
        />
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Login
