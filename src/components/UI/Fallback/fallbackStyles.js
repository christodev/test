import {StyleSheet} from 'react-native'
import {COLORS, FONTS} from '../../../constants'

export const styles = StyleSheet.create({
  fallbackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFill,
  },

  fallbackText: {
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    fontSize: 20,
  },
})
