import React, {useState} from 'react'
import Login from './Login'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {loginAction} from '../../redux/actions/authActions'
import {signInRequest} from '../../api/axiosInstance'

const LoginContainer = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    mode: 'all',
    defaultValues: {
      username: 'candidate',
      password: 'P@ssw0rd',
    },
  })
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const signIn = async credentials => {
    setError(null)
    setLoading(true)
    try {
      const {data} = await signInRequest(credentials)
      dispatch(loginAction(data.accessToken))
      navigation.replace('Dashboard')
    } catch (err) {
      const errMessage = err.message.toLowerCase()
      if (
        errMessage.includes('timeout') ||
        errMessage.includes('network error')
      )
        setError('Login Failed! Please try again')
      else setError('Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Login
      signIn={signIn}
      handleSubmit={handleSubmit}
      control={control}
      isValid={isValid}
      loading={loading}
      error={error}
    />
  )
}

export default LoginContainer
