import {StyleSheet, Dimensions} from 'react-native'
import {FONTS, COLORS} from '../../constants'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  bgImage: {
    width: null,
    height: null,
    flex: 1,
  },

  screen: {
    height: height / 1.3,
    width: width,
    backgroundColor: '#fff',
    borderBottomRightRadius: 200,
    elevation: 5,
  },
  image: {
    width: '60%',
    height: '30%',
    marginTop: 20,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },

  formContainer: {
    paddingHorizontal: 20,
  },
  loginTitle: {
    fontSize: 25,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  loginDescription: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.primary,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.error,
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginTop: 5,
  },

  loginButton: {
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 20,
    elevation: 5,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
})
