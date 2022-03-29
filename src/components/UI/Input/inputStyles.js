import {StyleSheet} from 'react-native'
import {COLORS, FONTS} from '../../../constants'

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginTop: 20,
    color: COLORS.primary,
    fontFamily: FONTS.medium,
  },
  inputWrapper: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: '#fff',
    paddingLeft: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 50,
  },
  textInput: {
    fontFamily: FONTS.regular,
    flex: 1,
    marginHorizontal: 10,
  },
  errorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorState: {
    color: COLORS.error,
    fontSize: 12,
    fontFamily: FONTS.regular,
    marginLeft: 5,
  },

  searchWrapper: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
    marginHorizontal: 20,
  },
  searchText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: '#fff',
    flex: 1,
    marginHorizontal: 10,
  },
})
