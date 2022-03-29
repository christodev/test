import {StyleSheet} from 'react-native'
import {COLORS, FONTS} from '../../constants'
export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
  },
  logoutButton: {
    fontFamily: FONTS.medium,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '40%',
  },
  title: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: 22,
  },
  fallbackText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
})
