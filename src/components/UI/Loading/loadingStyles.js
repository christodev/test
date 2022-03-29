import {StyleSheet} from 'react-native'
import {COLORS, FONTS} from '../../../constants'

export const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFill,
  },
  loadingText: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    fontSize: 18,
  },
})
